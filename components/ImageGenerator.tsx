
import React, { useState, useEffect, forwardRef } from 'react';
import { GoogleGenAI } from '@google/genai';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-light">
        <span className="text-accent">&lt;</span>{children}<span className="text-accent">/&gt;</span>
    </h2>
);

type ImageSize = '1K' | '2K' | '4K';

const LoadingSpinner: React.FC = () => (
    <div className="flex flex-col items-center justify-center gap-4">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-accent"></div>
        <p className="text-medium">Generating your masterpiece...</p>
    </div>
);

const ImageGenerator = forwardRef<HTMLElement>((_, ref) => {
    const [prompt, setPrompt] = useState('');
    const [imageSize, setImageSize] = useState<ImageSize>('1K');
    const [generatedImage, setGeneratedImage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [apiKeySelected, setApiKeySelected] = useState(false);

    useEffect(() => {
        const checkApiKey = async () => {
            if (window.aistudio) {
                const hasKey = await window.aistudio.hasSelectedApiKey();
                setApiKeySelected(hasKey);
            }
        };
        checkApiKey();
    }, []);

    const handleSelectKey = async () => {
        if (window.aistudio) {
            await window.aistudio.openSelectKey();
            setApiKeySelected(true); // Assume success to avoid race condition
        }
    };

    const handleGenerate = async () => {
        if (!prompt.trim()) {
            setError('Please enter a prompt.');
            return;
        }

        setIsLoading(true);
        setError(null);
        setGeneratedImage(null);

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const response = await ai.models.generateContent({
                model: 'gemini-3-pro-image-preview',
                contents: {
                    parts: [{ text: prompt }],
                },
                config: {
                    imageConfig: {
                        aspectRatio: '1:1',
                        imageSize: imageSize,
                    },
                },
            });

            let imageFound = false;
            for (const part of response.candidates[0].content.parts) {
                if (part.inlineData) {
                    const base64EncodeString: string = part.inlineData.data;
                    const imageUrl = `data:image/png;base64,${base64EncodeString}`;
                    setGeneratedImage(imageUrl);
                    imageFound = true;
                    break;
                }
            }
            if (!imageFound) {
                 setError('No image was generated. Please try a different prompt.');
            }

        } catch (e: any) {
            console.error(e);
            if (e.message?.includes('Requested entity was not found.')) {
                setError('API Key is invalid or not found. Please select a valid key.');
                setApiKeySelected(false);
            } else {
                setError('An error occurred during image generation. Please check the console for details.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="image-generator" ref={ref} className="py-20">
            <SectionTitle>Image Generator</SectionTitle>
            <p className="max-w-3xl mx-auto text-center text-medium mb-12">
                Unleash your creativity! Use the power of AI to generate stunning images from a simple text prompt. This feature uses the <code className="bg-secondary text-accent px-1 rounded">gemini-3-pro-image-preview</code> model.
            </p>

            {!apiKeySelected ? (
                <div className="bg-secondary p-8 rounded-lg text-center max-w-2xl mx-auto">
                    <h3 className="text-xl font-bold text-light mb-4">API Key Required</h3>
                    <p className="text-medium mb-6">
                        To use the image generator, you must select an API key from a paid Google Cloud project.
                        For more information on billing, please visit the <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noopener noreferrer" className="text-accent underline">official documentation</a>.
                    </p>
                    <button
                        onClick={handleSelectKey}
                        className="bg-accent text-primary font-bold py-3 px-8 rounded-full hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105"
                    >
                        Select Your API Key
                    </button>
                </div>
            ) : (
                <div className="max-w-3xl mx-auto">
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="prompt" className="block text-sm font-medium text-medium mb-2">Your Prompt</label>
                            <textarea
                                id="prompt"
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                placeholder="e.g., A neon hologram of a cat driving a sports car at top speed"
                                className="w-full bg-secondary text-light p-3 rounded-md border border-gray-700 focus:ring-2 focus:ring-accent focus:outline-none transition-shadow"
                                rows={3}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-medium mb-2">Image Size</label>
                            <div className="flex space-x-2">
                                {(['1K', '2K', '4K'] as ImageSize[]).map(size => (
                                    <button
                                        key={size}
                                        onClick={() => setImageSize(size)}
                                        className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${
                                            imageSize === size
                                                ? 'bg-accent text-primary'
                                                : 'bg-secondary text-medium hover:bg-gray-700'
                                        }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <button
                            onClick={handleGenerate}
                            disabled={isLoading}
                            className="w-full bg-accent text-primary font-bold py-3 px-8 rounded-full hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 disabled:bg-gray-600 disabled:scale-100 disabled:cursor-not-allowed"
                        >
                            {isLoading ? 'Generating...' : 'Generate Image'}
                        </button>
                    </div>

                    <div className="mt-12 min-h-[300px] flex items-center justify-center bg-secondary rounded-lg p-4 border border-dashed border-gray-700">
                        {isLoading ? (
                            <LoadingSpinner />
                        ) : error ? (
                            <p className="text-red-400 text-center">{error}</p>
                        ) : generatedImage ? (
                            <img src={generatedImage} alt="Generated by AI" className="rounded-md max-w-full h-auto shadow-lg" />
                        ) : (
                            <p className="text-medium text-center">Your generated image will appear here.</p>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
});

export default ImageGenerator;
