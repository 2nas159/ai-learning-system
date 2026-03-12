import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { subjectsColors, voices } from "@/constants";
import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getSubjectColor = (subject: string) => {
  return subjectsColors[subject as keyof typeof subjectsColors];
};

export const configureAssistant = (voice: string, style: string, companionName: string) => {
  let voiceId = "EXAVITQu4vr4xnSDxMaL"; // Default Sarah ID

  if (voice === "male" || voice === "female") {
    const genderVoices = voices[voice as keyof typeof voices];
    voiceId = (genderVoices as any)[style] || (genderVoices as any)["casual"] || "EXAVITQu4vr4xnSDxMaL";
  } else {
    // If the voice is not 'male' or 'female', assume it's a direct voiceId
    voiceId = voice || "EXAVITQu4vr4xnSDxMaL";
  }

  const vapiAssistant: CreateAssistantDTO = {
    name: companionName || "Companion",
    firstMessage:
        `Hello, I am ${companionName}. Let's start the session. Today we'll be talking about {{topic}}.`,
    transcriber: {
      provider: "deepgram",
      model: "nova-2",
      language: "en",
    },
    voice: {
      provider: "11labs",
      voiceId: voiceId,
      stability: 0.4,
      similarityBoost: 0.8,
      speed: 1,
      style: 0.5,
      useSpeakerBoost: true,
    },
    model: {
      provider: "openai",
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are a highly knowledgeable tutor teaching a real-time voice session with a student. Your goal is to teach the student about the topic and subject.

                    Here is the context of what you have talked about in past sessions. Use this to continue the conversation naturally:
                    {{past_memory}}

                    Tutor Guidelines:
                    Stick to the given topic - {{ topic }} and subject - {{ subject }} and teach the student about it.
                    Keep the conversation flowing smoothly while maintaining control.
                    From time to time make sure that the student is following you and understands you.
                    Break down the topic into smaller parts and teach the student one part at a time.
                    Keep your style of conversation {{ style }}.
                    Keep your responses short, like in a real voice conversation.
                    Do not include any special characters in your responses - this is a voice conversation.
              `,
        },
      ],
    },
    clientMessages: ["transcript", "speech-update"],
    serverMessages: ["end-of-call-report"],
  };
  return vapiAssistant;
};
