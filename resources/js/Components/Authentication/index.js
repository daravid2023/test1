import {useState} from "react";

import {Modal} from "@mantine/core";

import AuthenticationForm from "./AuthenticationForm.js";
import AuthenticationButton from "./AuthenticationButton.js";

function Authentication({auth}) {
    const [opened, setOpened] = useState(false);

    return (
        <>
            <AuthenticationButton setOpened={setOpened} auth={auth}/>
            <Modal
                centered
                title="Authentication"
                opened={opened}
                onClose={() => setOpened(false)}
            >
                <AuthenticationForm/>
            </Modal>
        </>
    );
}

export default Authentication;
