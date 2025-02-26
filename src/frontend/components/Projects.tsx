'use client'
import React from 'react';

const Projects = () => {
    return (
        <div>
            <div className='flex flex-col justify-center px-10 py-20 sm:grid'>
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <svg
                        aria-hidden="true"
                        className="absolute -z-1 top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
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
                <div className='flex flex-col sm:flex-row sm:place-content-around sm:basis-1/2'>
                    <div className='flex flex-col gap-y-1 sm:pr-30 sm:pl-10 sm:pt-50 sm:basis-1/2 sm:justify-start'>
                        <h1 className='text-xl text-gray-800 sm:text-3xl sm:pb-5 '>Site pentru resell</h1>
                        <p className='text-gray-700 sm:text-xl sm:pr-10'>
                            Acesta este un site pentru produse vestimentare, cuprinde o
                            interfață prietenoasă pentru utilizator. <br />
                        </p>
                        <p className='text-gray-700 sm:text-md'>
                            Navigare simplă și intuitivă.
                            Design responsiv creat cu HTML si CSS: Funcționează bine pe diverse dispozitive PC, tabletă, telefon. <br />
                            Informații clare: Descrieri detaliate ale produselor, inclusiv specificații și prețuri. <br />
                            O gama larga de produse salvata intr-o baza de date DynamoDB. <br />
                        </p>
                        <br />
                        <p className='text-gray-600 sm:text-md'>
                            Click pe urmatorul link, duce catre site.
                        </p>
                        <a className='text-sm indent-2 text-blue-500' href="https://d17bz2crj5yknn.cloudfront.net">d17bz2crj5yknn.cloudfront.net</a>
                        <br />
                        <p>Creat cu:</p>
                        <ul className='grid grid-cols-5'>
                            <li className="">
                                <img className='favicon' src="https://all-favicons.s3.us-east-1.amazonaws.com/program-languages-favicons/icons8-typescript-48.png" alt="Tipescript" />
                            </li>
                            <li className="">
                                <img className='favicon' src="https://all-favicons.s3.us-east-1.amazonaws.com/program-languages-favicons/icons8-html-48.png" alt="HTML" />
                            </li>
                            <li className="">
                                <img className='favicon' src="https://all-favicons.s3.us-east-1.amazonaws.com/program-languages-favicons/icons8-css-48.png" alt="CSS" />
                            </li>
                            <li className="">
                                <img className='favicon' src="https://all-favicons.s3.us-east-1.amazonaws.com/program-languages-favicons/icons8-nodejs-48.png" alt="NodeJs" />
                            </li>
                            <li className="">
                                <img className='favicon' src="https://all-favicons.s3.us-east-1.amazonaws.com/program-languages-favicons/icons8-dynamo-48.png" alt="DynamoDB" />
                            </li>
                        </ul>
                        <br />
                    </div>
                    <div className='flex item-center'>
                        <img className='object-contain shadow-md' src="https://images-product-rafa.s3.us-east-1.amazonaws.com/Screenshot+2025-02-23+140352.png" alt="" />
                    </div>
                </div>
                <br />
                <br />
                <div className='flex flex-col sm:flex-row sm:place-content-around sm:basis-1/2'>
                    <div className='flex flex-col gap-y-1 sm:pr-30 sm:pl-[6rem] sm:pt-50 sm:basis-1/2 sm:justify-start'>
                        <h1 className='text-xl text-gray-800 sm:text-3xl sm:pb-5 '>To do list </h1>
                        <p className='text-gray-700 sm:text-xl sm:pr-10'>
                            Acesta este un demo pentru ideea de to do list, cuprinde concepte
                            de baza a unui API RESTful. <br />
                        </p>
                        <br />
                        <p className='text-gray-600 sm:text-md'>
                            Click pe urmatorul link, duce catre site.
                        </p>
                        <a className='text-sm indent-2 text-blue-500' href="https://d35k1hsuhnui9h.cloudfront.net">d35k1hsuhnui9h.cloudfront.net</a>
                        <br />
                        <p>Creat cu:</p>
                        <ul className='grid grid-cols-5'>
                            <li className="">
                                <img className='favicon' src="https://all-favicons.s3.us-east-1.amazonaws.com/program-languages-favicons/icons8-typescript-48.png" alt="Tipescript" />
                            </li>
                            <li className="">
                                <img className='favicon' src="https://all-favicons.s3.us-east-1.amazonaws.com/program-languages-favicons/icons8-html-48.png" alt="HTML" />
                            </li>
                            <li className="">
                                <img className='favicon' src="https://all-favicons.s3.us-east-1.amazonaws.com/program-languages-favicons/icons8-css-48.png" alt="CSS" />
                            </li>
                            <li className="">
                                <img className='favicon' src="https://all-favicons.s3.us-east-1.amazonaws.com/program-languages-favicons/icons8-nodejs-48.png" alt="NodeJs" />
                            </li>
                            <li className="">
                                <img className='favicon' src="https://all-favicons.s3.us-east-1.amazonaws.com/program-languages-favicons/icons8-dynamo-48.png" alt="DynamoDB" />
                            </li>
                        </ul>
                        <br />
                    </div>
                    <div className='flex item-center sm:max-w-[30rem]'>
                        <img className='object-contain shadow-md' src="https://images-product-rafa.s3.us-east-1.amazonaws.com/Screenshot+2025-02-23+140750.png" alt="" />
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Projects;
