'use client'
import * as React from 'react';

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
                            <section className="mt-6 text-xl/8 text-gray-700 indent-6">
                                <strong>Partac Alexis-Matei</strong> este numele meu, am 20 de ani și sunt la începutul carierei mele în domeniul software engineering.
                                Studiez la <strong>Universitatea "Gheorge Asachi" </strong> din Iasi cu specializarea <strong>Ingineria Sistemelor</strong>.
                            </section>
                            <section className="mt-6 text-xl/8 text-gray-700 indent-6">
                                Sunt o persoană atentă la detalii, dornică să învăț și să mă perfecționez continuu. Îmi place să colaborez cu echipe diverse și sunt convins că pot aduce o contribuție valoroasă în cadrul oricărui proiect.
                            </section>
                        </div>
                    </div>
                </div>
                <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <img
                        alt=""
                        src="https://images-product-rafa.s3.us-east-1.amazonaws.com/image-me.jpg"
                        className="w-[20rem] max-w-none rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 sm:w-[40rem] opacity-90"
                    />
                </div>
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-10">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
                            <p className="indent-6 pt-0">
                                Pe parcursul studiilor, am lucrat cu diverse tehnologii și limbaje de programare, cum ar fi HTML, CSS, Tailwind, JavaScript, React, TypeScript,
                                NodeJs, Git, AWS
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
                                        <a href="https://my-w-s.s3.us-east-1.amazonaws.com/CV-2025.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIA2YICAFC6ZBZJO2N5%2F20250226%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250226T181925Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLWVhc3QtMSJHMEUCIQCMUCn6wBBOSZYTASCXNdzPZqVeDHVWCgVIaWffLkNAvwIgUuhjhSpt38OH%2BQCJgVBM4EOJ4HXben4m3K2bQV0gToIq%2FwIIYxAAGgw3MzkyNzU0NTA1NTciDKyHlCxDnklxNvf59SrcAlW%2Fo%2BXycH4FCo0cypDAbT3%2FTnGDyAo4gzxqqVnk%2FGJCeTJUPi9z1Cmfpq6WAgNCDzb6YJ1AXXFxAOj0vYTBhhBovhq1RqHzabV8O0%2FmK55iUN65QllDsACOC0b2NnK0okxkgDM7TNryRi6UafcfT4bkRLzvWfjrxN861VMUsPL6WW6VtyQELGAgDPAAtJ07QmZaMaJJQELqoxcjX48QxHoOCSDJNKnp%2F5EYnBjZSlwTUs977OItoU4FSFmLEeqhct15S1bNRe4%2FqzXXOA65bZ13%2FI1wrJNhTLSqIUzEEdOM7mL6Sw5gc0pnshH9AA0JiaBmTbeosC9BLP%2BzqubzfLKt73Ioqbc3EMyO%2BwedFGTQVafyWnNomCximT2M4Yz3xhPY7dpDAaz2TV%2By1TqHSOMZH1bQhUovRaO4%2B8qO1PWTIYYYpKRqpvQOppOD%2FmQLhDB82cgI0xbr4od1hzCKm%2F29BjqzAtNcFHYjrFFEjHcsDr3EAz04QP8d2vdeQ1ryQAY2UQZEbPvALY2MeRaTS%2F7%2BA3f2ClsHx9Rofv%2BVAAPnDHznWv99Yt0m3WWZpzLuWMV4uzMtmldiob2S08%2B1OYeDEesjYiw%2B2fSQzYws2mZDyzSD7%2FJ5OudftVgY1Lkclllfo7fUUd3qPe2iTzR2s0%2FdwxrXpZzz%2BgQlFxP5ZBupaowdvaltoGj1107UbsPFcVqYjSvd5Sv%2BSQGyhj7oewBuhd6aJ4%2BRofG2XRQfVduvswsvWuaAL%2FXlhkmnm2cEvwwUJKjCpXtFrLSdp9bduEmcZE9wG8KSNshKwPebHp08joSrLHyg82PMM4OqZommrOsNEM0PP0d3YDKIWF%2BPUDbRTM0yI1yO0azueKJT1Jf36F%2FLO5Kc2gs%3D&X-Amz-Signature=9a5985c6882a82ce31f7b9dc3b34d02b7b3e15bbd94590833734e250c95ef914&X-Amz-SignedHeaders=host&response-content-disposition=inline">
                                            <strong className="font-semibold text-gray-900 hover:underline">Aici puteti gasi CV-ul meu complet.</strong>
                                        </a>
                                    </span>
                                </li>
                            </ul>
                            <p className="indent-6 pt-3">
                                Daca sunteti interesat de ceea ce fac ma puteti gasi si pe retelele sociale.
                            </p>
                            <ul role="list" className="grid grid-cols-5 justify center mt-8 space-x-[15px] pt-3">
                                <li>
                                    <div className="flex items-center justify-center">
                                        <a href="https://www.instagram.com/mateialexis/" >
                                            <img className='w-[2rem]' src="https://all-favicons.s3.us-east-1.amazonaws.com/favicons/instagram.png" alt="HTML" />
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center justify-center">
                                        <a href="https://x.com/?mx=2" className="text-3xl mr-4">
                                            <img className='w-[2rem]' src="https://all-favicons.s3.us-east-1.amazonaws.com/favicons/twitter.png" alt="HTML" />
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center justify-center">
                                        <a href="https://www.linkedin.com/in/alexis-partac-b15b101b5" className="text-3xl mr-4">
                                            <img className='w-[2rem]' src="https://all-favicons.s3.us-east-1.amazonaws.com/favicons/icons8-linkedin-48.png" alt="HTML" />
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center justify-center">
                                        <a href="https://www.facebook.com/" className="text-3xl mr-4">
                                            <img className='w-[2rem]' src="https://all-favicons.s3.us-east-1.amazonaws.com/favicons/facebook.png" alt="HTML" />
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center justify-center">
                                        <a href="https://github.com/alexispartac" className="text-3xl mr-4">
                                            <img className='w-[2rem]' src="https://all-favicons.s3.us-east-1.amazonaws.com/favicons/icons8-github-64.png" alt="HTML" />
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
