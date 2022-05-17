import {Button} from "@mantine/core";

function AuthenticationButton({setOpened, auth}) {
    return (
        <>
            {!auth.user &&
                <Button onClick={() => setOpened(true)} uppercase color="blue" m={16}>
                    LOGIN
                </Button>
            }
        </>
    );
}

export default AuthenticationButton;
