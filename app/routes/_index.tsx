import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
    return [
        { title: "Agricom - E-Commerce" },
        {
            name: "description",
            content:
                "E-commerce website for selling agricultural tools and equipments",
        },
    ];
};

const Home = () => {
    return (
        <section
            className={
                "h-screen bg-gradient-to-b  from-primary to-primary-800 flex justify-center items-center"
            }
        >
            <div className={"center flex-col space-y-10"}>
                <h1 className={"text-5xl text-primary-200 font-bold "}>
                    Default Template
                </h1>

                <Link to={"/about-us"}>
                    <small
                        className={
                            "bg-white/20 font-jetBrainsMono border border-gray-100/20 px-4 py-1 text-white rounded-full text xs"
                        }
                    >
                        roote/_index.tsx
                    </small>
                </Link>
            </div>
        </section>
    );
};

export default Home;
