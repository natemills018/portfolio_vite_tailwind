import React from "react";

const PaddingComponent = () => {

    return (
        <main className="relative">
            <section className="xl:padding-1 wide:padding-r padding-b">
                Hero
            </section>
            <section className="padding">
                JavaScript
            </section>
            <section className="padding">
                React
            </section>
            <section className="padding bg-accent">
                Node
            </section>
            <section className="padding">
                Express
            </section>
        </main>
    )


}

export default PaddingComponent;