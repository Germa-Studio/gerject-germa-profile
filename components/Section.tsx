import React from "react";

type Props = {
    id?: string;
    className: string;
    children: React.ReactNode;
};

export default function Section({ id, className, children }: Props) {
    return (
        <div id={id} className={`min-h-screen ${className}`}>
            {children}
        </div>
    );
}
