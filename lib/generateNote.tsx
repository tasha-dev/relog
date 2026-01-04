// Codes by mahdi tasha
// Importing part
import { Octokit } from "octokit";
import { createGroq } from "@ai-sdk/groq";
import { GenerateNoteParamType } from "@/type/lib";
import { generateText } from "ai";

// Creating and exporting GenerateNote function which is a function and takes url of repo and title as parametre
// And fetches data of given repo url and then sends to ai to be proccessed and returns simple markdown in string
export default async function GenerateNote({
  onStatusChange,
  data: { repoUrl, title },
}: GenerateNoteParamType) {
  // Defining enviroment variables
  const githubApiKey = process.env.NEXT_PUBLIC_GITHUB_API_KEY as string;
  const groqApiKey = process.env.NEXT_PUBLIC_GROQ_API_KEY as string;

  // Defining infos from repoUrl
  const { pathname } = new URL(repoUrl);
  const [owner, repo] = pathname.split("/").filter(Boolean);

  // Defining sdk's
  const octokit = new Octokit({
    auth: githubApiKey,
  });

  const groq = createGroq({
    apiKey: groqApiKey,
  });

  // Async/await part
  try {
    onStatusChange?.({
      status: "loading-repo",
    });

    const repoData = await octokit.request("GET /repos/{owner}/{repo}", {
      owner,
      repo,
    });

    const repoCommitsData = await octokit.request(
      "GET /repos/{owner}/{repo}/commits",
      {
        owner,
        repo,
        per_page: 20,
      },
    );

    const repoInfo = {
      description: repoData.data.description,
      owner: repoData.data.owner,
      name: repoData.data.full_name,
      commits: repoCommitsData.data.map((item) => item.commit.message),
    };

    onStatusChange?.({
      status: "loading-ai",
    });

    const system = `You are a professional product writer specializing in high-quality, detailed GitHub release announcements.

Follow these strict guidelines:
- Use a polished, professional tone with a slight warm and confident touch
- Begin with one engaging announcement sentence highlighting the importance/milestone of this release
- Structure the release note using clear markdown headings in this preferred order:
  1. Opening announcement (1–2 sentences)
  2. ### What is [Project Name]?
     (1–2 concise but informative paragraphs explaining purpose, core problem solved, and unique value proposition)
  3. ### Highlights of this release / What's new in vX.X.X
     (Detailed bullet list – each bullet should explain the feature/improvement with its main benefit)
  4. ### Key Features (overall – if this is an important release or first public version)
     (More comprehensive bullet list of the most valuable capabilities)
  5. ### Built for / Ideal for
     (Bullet list describing main target users and use-cases)
  6. ### Technical foundation
     (Concise bullet list of main technologies and architectural choices)
- Use **bold** for feature names, important concepts and small highlights
- Be generous with explanations: describe why a change matters and what benefit it brings
- Write substantial content when the project justifies it — aim for depth without being verbose
- Never include calls-to-action, contributor lists, installation instructions, or thanks messages
- End the note naturally — no forced closing sentence

Output **only** the complete markdown release note content.`;

    const user = `Project name: ${repoInfo.name} Release version/title: ${title} Made By : ${repoInfo.owner}

Repository: ${repoInfo.name}
Description: ${repoInfo.description}

Commit messages (most recent first):

${repoInfo.commits
  .slice(0, 60)
  .map((msg) => `- ${msg.trim()}`)
  .join("\n")}

Write a high-quality, structured release announcement in the professional style described above.`;

    const { text } = await generateText({
      model: groq("llama-3.1-8b-instant"),
      prompt: user,
      system,
    });

    onStatusChange?.({
      status: "success",
      data: {
        title,
        content: text,
      },
    });
  } catch (error) {
    onStatusChange?.({
      status: "error",
      error: "There was an unexpected error",
    });
  }
}
