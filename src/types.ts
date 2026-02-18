export interface StoryLine {
    es: string;
    en: string;
    speaker?: string;
}

export interface Story {
    id: string;
    titleEs: string;
    titleEn: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    description?: string;
    color?: string; // Theme color
    genre?: string;
    tone?: string;
    emoji?: string;
    lines: StoryLine[];
}