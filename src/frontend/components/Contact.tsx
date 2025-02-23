'use client'
import * as React from 'react'
import emailjs from '@emailjs/browser';
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { Field, Label, Switch } from '@headlessui/react'

type InfoFormProp = {
    first_name: string,
    last_name: string,
    company?: string,
    email: string,
    phone_number: string,
    message: string
}

export default function Contact() {
    const [agreed, setAgreed] = React.useState<boolean>(false);
    const [infoForm, setInfoForm] = React.useState<InfoFormProp>(
        {
            first_name: "",
            last_name: "",
            company: "",
            email: "",
            phone_number: "",
            message: ""
        }
    );

    React.useEffect(() => {
        emailjs.init({
            publicKey: 'aKQS4bLVSyXfhE0Rc',
        });
    }, []);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setInfoForm({
            ...infoForm,
            [name]: value
        });
    };

    const SendEmail = () => {
        emailjs.send('service_m7xm4on', 'template_zael9ym', infoForm)
            .then((result) => {
                console.log('Email successfully sent:', result.text);
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                alert('Failed to send email. Please check the console for details.');
            });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (agreed) {
            SendEmail();
            setInfoForm(
                {
                    first_name: "",
                    last_name: "",
                    company: "",
                    email: "",
                    phone_number: "",
                    message: ""
                }
            );
        } else {
            alert('Please accept the terms and conditions.');
        }

    };

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="isolate h-screen bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Contacteaza-ma</h2>
                    <p className="mt-2 text-lg/8 text-gray-600">Voi raspunde cat de repde posibil la mesajul tau.</p>
                </div>
                <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
                                Nume
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="first-name"
                                    name="first_name"
                                    onChange={handleChange}
                                    type="text"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">
                                Prenume
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="last-name"
                                    name="last_name"
                                    type="text"
                                    onChange={handleChange}
                                    autoComplete="family-name"
                                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="company" className="block text-sm/6 font-semibold text-gray-900">
                                Companie
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="company"
                                    name="company"
                                    type="text"
                                    onChange={handleChange}
                                    autoComplete="organization"
                                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                                Email
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    onChange={handleChange}
                                    autoComplete="email"
                                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-900">
                                Phone number
                            </label>
                            <div className="mt-2.5">
                                <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                                    <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                                        <select
                                            id="country"
                                            name="country"
                                            autoComplete="country"
                                            aria-label="Country"
                                            className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        >
                                            <option>US</option>
                                            <option>CA</option>
                                            <option>EU</option>
                                        </select>
                                        <ChevronDownIcon
                                            aria-hidden="true"
                                            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                        />
                                    </div>
                                    <input
                                        id="phone-number"
                                        name="phone_
                                        number"
                                        type="text"
                                        onChange={handleChange}
                                        placeholder="123-456-7890"
                                        className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
                                Mesaj
                            </label>
                            <div className="mt-2.5">
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    onChange={handleChange}
                                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                    defaultValue={''}
                                />
                            </div>
                        </div>
                        <Field className="flex gap-x-4 sm:col-span-2">
                            <div className="flex h-6 items-center">
                                <Switch
                                    checked={agreed}
                                    onChange={setAgreed}
                                    className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-gray-900/5 transition-colors duration-200 ease-in-out ring-inset focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-checked:bg-indigo-600"
                                >
                                    <span className="sr-only">De acord cu termenii si conditiile.</span>
                                    <span
                                        aria-hidden="true"
                                        className="size-4 transform rounded-full bg-white ring-1 shadow-xs ring-gray-900/5 transition duration-200 ease-in-out group-data-checked:translate-x-3.5"
                                    />
                                </Switch>
                            </div>
                            <Label className="text-sm/6 text-gray-600">
                                Selecteaza asta, esti de acord cu{' '}
                                <a href="#" className="font-semibold text-indigo-600">
                                    Termenii si&nbsp;conditiile
                                </a>
                                .
                            </Label>
                        </Field>
                    </div>
                    <br />
                    <div className="mt-10">
                        <button
                            type="submit"
                            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Trimite
                        </button>
                    </div>
                </form>
                <br /><br /><br />
            </div>
        </div>
    )
}