import React from "react";

export default function FeatureCard(props:{
    title: string;
    description: string;
}){
    const { title, description} = props;
    return <div className="bg-neutral-800 border border-white/10 p-6  rounded-3xl">
        <div>
            <h1 className="text-3xl font-medium mt-6">{title}</h1>
            <div className="text-white mt-2">{description}</div>
        </div>
    </div>;
};