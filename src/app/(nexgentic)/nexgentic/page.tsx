"use client"
import Grainient from "@/components/Granient";
import TopNavbarNexgentic from "@/components/topnavbarNexgentic";

export default function Home() {
    return (
        <main className="relative min-h-screen overflow-hidden text-white">
            <div className="absolute inset-0 -z-10">
                <Grainient
                    className="h-full w-full"
                    color1="#322f32"
                    color2="#332c4e"
                    color3="#343236"
                    timeSpeed={1.85}
                    colorBalance={0}
                    warpStrength={1}
                    warpFrequency={5}
                    warpSpeed={2}
                    warpAmplitude={50}
                    blendAngle={0}
                    blendSoftness={0.05}
                    rotationAmount={500}
                    noiseScale={2}
                    grainAmount={0.1}
                    grainScale={2}
                    grainAnimated={false}
                    contrast={1.5}
                    gamma={1}
                    saturation={1}
                    centerX={0}
                    centerY={0}
                    zoom={0.9}
                />
            </div>

            <div className="relative z-10 border-b border-white/50">
                <TopNavbarNexgentic />
            </div>
            <section className="mt-35 relative flex min-h-[calc(100dvh-5rem)] justify-center  px-6 text-center">
                <div className="max-w-6xl space-y-6">
                    <p className="text-3xl leading-tight md:text-4xl">
                        Ready To Transform Into An AI-Native Organization?
                    </p>
                    
                    <p className="text-5xl leading-tight md:text-6xl">
                        Next-Gen Intelligence. Human Empowered. Real Impact.
                    </p>
                    
                    <p className="mx-auto max-w-4xl text-xl leading-relaxed text-white/75 md:text-3xl">
                        Transform business models, operating processes, and digital products with agentic AI that works alongside your people to deliver real, measurable business impact.
                    </p>
                </div>
            </section>
        </main>
    );
}
