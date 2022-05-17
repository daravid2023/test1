import React from "react";

import {useForm, useToggle, upperFirst} from "@mantine/hooks";
import {
    TextInput,
    PasswordInput,
    Group,
    Button,
    Checkbox,
    Anchor,
} from "@mantine/core";
import {Inertia} from "@inertiajs/inertia";

export default function AuthenticationForm() {
    const [type, toggle] = useToggle("login", ["login", "register"]);
    const form = useForm({
        initialValues: {
            email: "",
            name: "",
            password: "",
            terms: true,
        },

        validationRules: {
            email: (val) => /^\S+@\S+$/.test(val),
            password: (val) => val.length >= 6,
        },
    });

    return (
        <form onSubmit={form.onSubmit((values) => {
            return Inertia.post(route('login'), values)
        })}>
            <Group direction="column" grow>
                {type === "register" && (
                    <TextInput
                        label="Name"
                        placeholder="Your name"
                        value={form.values.name}
                        onChange={(event) =>
                            form.setFieldValue("name", event.currentTarget.value)
                        }
                    />
                )}

                <TextInput
                    required
                    label="Email"
                    placeholder="hello@mantine.dev"
                    value={form.values.email}
                    onChange={(event) =>
                        form.setFieldValue("email", event.currentTarget.value)
                    }
                    error={form.errors.email && "Invalid email"}
                />

                <PasswordInput
                    required
                    label="Password"
                    placeholder="Your password"
                    value={form.values.password}
                    onChange={(event) =>
                        form.setFieldValue("password", event.currentTarget.value)
                    }
                    error={
                        form.errors.password &&
                        "Password should include at least 6 characters"
                    }
                />

                {type === "register" && (
                    <Checkbox
                        label="I accept terms and conditions"
                        checked={form.values.terms}
                        onChange={(event) =>
                            form.setFieldValue("terms", event.currentTarget.checked)
                        }
                    />
                )}
            </Group>

            <Group position="apart" mt="xl">
                <Anchor
                    component="button"
                    type="button"
                    color="gray"
                    onClick={() => toggle()}
                    size="xs"
                >
                    {type === "register"
                        ? "Already have an account? Login."
                        : "Don't have an account? Register."}
                </Anchor>
                <Button type="submit" color="blue">{upperFirst(type)}</Button>
            </Group>
        </form>
    );
}
