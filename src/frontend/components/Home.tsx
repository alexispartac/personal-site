'use client'
import React from 'react';

export default function Home() {
    return (
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg
                    aria-hidden="true"
                    className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                >
                    <defs>
                        <pattern
                            x="50%"
                            y={-1}
                            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                            width={200}
                            height={200}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                        <path
                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
                </svg>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-10">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-700 sm:text-3xl">
                                Salut,
                            </h2>
                            <br />
                            <p className="mt-6 text-xl/8 text-gray-700 indent-6">
                                <strong>Partac Alexis-Matei</strong> este numele meu, am 20 de ani și sunt la începutul carierei mele în domeniul software engineering.
                                Studiez la <strong>Universitatea "Gheorge Asachi" </strong> din Iasi cu specializarea <strong>Ingineria Sistemelor</strong>.
                            </p>
                            <p className="mt-6 text-xl/8 text-gray-700 indent-6">
                                Sunt o persoană atentă la detalii, dornică să învăț și să mă perfecționez continuu. Îmi place să colaborez cu echipe diverse și sunt convins că pot aduce o contribuție valoroasă în cadrul oricărui proiect.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <img
                        alt=""
                        src="https://tailwindui.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
                        className="w-[48rem] max-w-none rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem]"
                    />
                </div>
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-10">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
                            <p className="indent-6 pt-0">
                                Pe parcursul studiilor, am lucrat cu diverse tehnologii și limbaje de programare, cum ar fi HTML, CSS, JavaScript, React, TypeScript,
                                și am realizat proiecte pe care le veti gasi pe pagina <strong>proiecte</strong>,
                                care mi-au oferit o înțelegere solidă a proceselor de dezvoltare software, inclusiv dezvoltare front-end, back-end, baze de date, testare.
                            </p>

                            <p className="mt-6 text-xl/8 text-gray-700 indent-6 pt-4">
                                În prezent, sunt în căutarea unui loc de muncă în domeniu, deoarece doresc să îmi dezvolt abilitățile practice
                                și să învăț de la profesioniști experimentați. Sunt motivat să contribui la proiecte interesante și să învăț rapid,
                                pentru a mă adapta la cerințele industriei.
                            </p>
                            <ul role="list" className="mt-8 space-y-8 text-gray-600 pt-3">
                                <li className="flex gap-x-3">
                                    <span>
                                        {/* CV ul meu */}
                                        <a href="">
                                            <strong className="font-semibold text-gray-900">Aici puteti gasi CV-ul meu complet.</strong>
                                        </a>
                                    </span>
                                </li>
                            </ul>
                            <p className="indent-6 pt-3">
                                Daca sunteti interesat de ceea ce fac ma puteti gasi si pe retelele sociale.
                            </p>
                            <ul role="list" className="flex mt-8 space-x-[15px]  pt-3">
                                <li className="pl-10">
                                    <div className="flex items-center justify-center">
                                        <a href="https://www.instagram.com/" className="text-3xl mr-4">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </div>
                                </li>
                                <li className="pl-10">
                                    <div className="flex items-center justify-center">
                                        <a href="https://x.com/?mx=2" className="text-3xl mr-4">
                                            <i className="fab fa-x-twitter"></i>
                                        </a>
                                    </div>
                                </li>
                                <li className="pl-10">
                                    <div className="flex items-center justify-center">
                                        <a href="https://www.linkedin.com/" className="text-3xl mr-4">
                                            <i className="fab fa-linkedin"></i>
                                        </a>
                                    </div>
                                </li>
                                <li className="pl-10">
                                    <div className="flex items-center justify-center">
                                        <a href="https://www.facebook.com/" className="text-3xl mr-4">
                                            <i className="fab fa-facebook"></i>
                                        </a>
                                    </div>
                                </li>
                                <li className="pl-10">
                                    <div className="flex items-center justify-center">
                                        <a href="https://github.com/alexispartac" className="text-3xl mr-4">
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </div>
                                </li>
                            </ul>

                            {/* <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">No server? No problem.</h2> */}
                            <p className="mt-6">
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
