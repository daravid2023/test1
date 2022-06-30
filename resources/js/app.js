require("./bootstrap");

import React from "react";
import { render } from "react-dom";
import { MantineProvider } from "@mantine/core";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => require(`./Pages/${name}`),
    setup({ el, App, props }) {
        return render(
            <MantineProvider
                withNormalizeCSS
                theme={{
                    other: {
                        lineHeights: [1.2, 1.4, 1.6, 1.8, 1.95],
                        fontFamilySecondary:
                            "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;",
                    },
                }}
            >
                <App {...props} />
            </MantineProvider>,
            el
        );
    },
});

InertiaProgress.init({ color: "#3a86ff" });
