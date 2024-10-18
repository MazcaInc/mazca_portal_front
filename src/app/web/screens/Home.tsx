import BlackOwl from "@assets/logos/black_owl.svg";

export default function Home() {
    return (
        <main className="relative w-full flex text-center justify-center items-start h-screen">
            <h1 className="relative text-6xl z-40">
                Portal interno da Mazca Inc. está em construção...
            </h1>
            <div
                className=""
                style={{
                    backgroundImage: `url(${BlackOwl})`,
                    position: "absolute",
                    top: 50,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: -10,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "contain"
                }}
            />
        </main>
    );
}
