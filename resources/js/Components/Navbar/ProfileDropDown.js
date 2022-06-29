import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import { Divider, Menu } from "@mantine/core";
import { Database, Logout } from "tabler-icons-react";

function ProfileDropDown({ username }) {
    return (
        <Menu>
            <Menu.Label>{username}</Menu.Label>

            <Link href={route("dashboard")} as="span">
                <Menu.Item icon={<Database size={14} />}>My listings</Menu.Item>
            </Link>

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
