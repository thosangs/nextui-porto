import { useState, useEffect, FormEvent } from "react";

import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { Toaster } from "sonner";
import { toast } from "sonner";

import { CircleCheckSVG, CircleXSVG } from "./ui/icons";
const MAIL_KEY = process.env.NEXT_PUBLIC_MAIL_KEY;

export const Form = () => {
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [message, setMessage] = useState<string>("");

	const [isInvalidName, setIsInvalidName] = useState<boolean>(false);
	const [isInvalidEmail, setIsInvalidEmail] = useState<boolean>(false);
	const [isInvalidMessage, setIsInvalidMessage] = useState<boolean>(false);

	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState("");

	useEffect(() => {
		if (name !== "") setIsInvalidName(false);
		if (
			email.match(
				/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
			)
		)
			setIsInvalidEmail(false);
		if (message !== "") setIsInvalidMessage(false);
	}, [name, email, message]);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (name === "") setIsInvalidName(true);
		if (email === "") setIsInvalidEmail(true);
		if (message === "") setIsInvalidMessage(true);

		if (!name || !email || !message) {
			return;
		}

		fetch(`https://formcarry.com/s/${MAIL_KEY}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({ name: name, email: email, message: message }),
		})
			.then((res) => res.json())
			.then((res) => {
				if (res.code === 200) {
					setSubmitted(true);
					setName("");
					setEmail("");
					setMessage("");
				} else {
					setError(res.message);
				}
			})
			.catch((error) => setError(error));
	};

	if (error) {
		toast("Email has not been sent", {
			className: "my-classname",
			duration: 3000,
			icon: <CircleXSVG />,
		});
	}

	if (submitted) {
		toast("Email has been sent", {
			className: "my-classname",
			duration: 3000,
			icon: <CircleCheckSVG />,
		});
	}

	return (
		<form className="flex flex-col gap-4" onSubmit={(e) => handleSubmit(e)}>
			<h2 className="text-3xl font-bold">Kontakan Yuk</h2>
			<p className="text-lg text-gray-400">
				Bisa langsung isi formulir dibawah ini untuk kirim aku email
			</p>
			<Input
				id="name"
				type="text"
				label="Nama"
				placeholder="Agus Sutopo"
				isInvalid={isInvalidName}
				value={name}
				onChange={(e) => setName(e.target.value)}
				errorMessage={isInvalidName && "Please enter your name"}
			/>
			<Input
				type="email"
				name="email"
				id="email"
				label="Email"
				placeholder="agus.soetopo@contoh.com"
				isInvalid={isInvalidEmail}
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				errorMessage={isInvalidEmail && "Please enter a valid email"}
			/>
			<Textarea
				id="message"
				type="text"
				label="Pesan"
				placeholder="Ceng bantuin bikin web pushbike"
				minRows={4}
				isInvalid={isInvalidMessage}
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				errorMessage={isInvalidMessage && "Email kosong :)"}
			/>
			<Button type="submit">Kirim Pesan</Button>

			<Toaster theme="dark" />
		</form>
	);
};
