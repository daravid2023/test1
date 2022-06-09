import { useState } from "react";

import { Box, Modal } from "@mantine/core";

import AuthenticationForm from "./AuthenticationForm.js";
import AuthenticationButton from "./AuthenticationButton.js";

function Authentication({ auth }) {
    const [opened, setOpened] = useState(false);

    return (
        <>
            <AuthenticationButton setOpened={setOpened} auth={auth} />
            <Modal
                centered
                title="Authentication"
                opened={opened}
                onClose={() => setOpened(false)}
            >
                <Box
                    sx={{
                        position: "relative",
                    }}
                >
                    <AuthenticationForm />
                </Box>
            </Modal>
        </>
    );
}

export default Authentication;
