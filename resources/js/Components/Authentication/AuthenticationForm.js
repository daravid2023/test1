import { useForm, useToggle, upperFirst } from "@mantine/hooks";
import {
    TextInput,
    PasswordInput,
    Group,
    Button,
    Checkbox,
    Anchor,
    Notification,
} from "@mantine/core";

import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";

export default function AuthenticationForm() {
    const [type, toggle] = useToggle("login", ["login", "register"]);
    const { errors } = usePage().props;

    const form = useForm({
        initialValues: {
            email: "",
            name: "",
            password: "",
            password_confirmation: "",
            terms: true,
        },

        validationRules: {
            email: (val) => /^\S+@\S+$/.test(val),
            password: (val) => val.length >= 6,
            password_confirmation: (val, { password_confirmation }) =>
                val === password_confirmation,
            terms: (val) => !!val,
        },
    });

    return (
        <form
            onSubmit={form.onSubmit((values) =>
                type === "login"
                    ? Inertia.post(route("login"), values)
                    : Inertia.post(route("register"), values)
            )}
        >
            {Object.keys(errors).length !== 0 && (
                <Notification
                    color="red"
                    disallowClose
                >
                    {errors.email ||
                        errors.name ||
                        errors.password ||
                        errors.password_confirmation ||
                        errors.terms}
                </Notification>
            )}
            <Group direction="column" grow>
                {type === "register" && (
                    <TextInput
                        label="Name"
                        placeholder="Your name"
                        value={form.values.name}
                        onChange={(event) =>
                            form.setFieldValue(
                                "name",
                                event.currentTarget.value
                            )
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
                        form.setFieldValue(
                            "password",
                            event.currentTarget.value
                        )
                    }
                    error={
                        form.errors.password &&
                        "Password should include at least 6 characters"
                    }
                />
                {type === "register" && (
                    <PasswordInput
                        required
                        label="Confirm password"
                        placeholder="Confirm your password"
                        value={form.values.password_confirmation}
                        onChange={(event) =>
                            form.setFieldValue(
                                "password_confirmation",
                                event.currentTarget.value
                            )
                        }
                        error={
                            form.errors.password_confirmation &&
                            "Your password and confirmation password do not match"
                        }
                    />
                )}

                {type === "register" && (
                    <Checkbox
                        label="I accept terms and conditions"
                        checked={form.values.terms}
                        onChange={(event) =>
                            form.setFieldValue(
                                "terms",
                                event.currentTarget.checked
                            )
                        }
                        error={
                            form.errors.terms &&
                            "Please accpet our terms and conditions before registering"
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
                <Button type="submit" color="blue">
                    {upperFirst(type)}
                </Button>
            </Group>
        </form>
    );
}
