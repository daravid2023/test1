import { Inertia } from "@inertiajs/inertia";
import { Divider, Menu } from "@mantine/core";
import { Database, Logout } from "tabler-icons-react";

function ProfileDropDown({ username }) {
    return (
        <Menu>
            <Menu.Label>{username}</Menu.Label>
            <Menu.Item icon={<Database size={14} />}>My listings</Menu.Item>
            <Divider />
            <Menu.Item
                color="red"
                icon={<Logout size={14} />}
                onClick={() => Inertia.post("logout")}
            >
                Logout
            </Menu.Item>
        </Menu>
    );
}

export default ProfileDropDown;
