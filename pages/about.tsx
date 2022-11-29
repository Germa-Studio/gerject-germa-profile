import Image from "next/image";
import Link from "next/link";
import Section from "../components/Section";

export default function About() {
    return (
        <>
            <Section className={"pt-16"}>
                <div className="m-10">
                    <h1 className="text-3xl">
                        Germa{" "}
                        <span className="text-secondary">&nbsp; /gêrma/</span>
                    </h1>
                    <p className="mt-5">
                        Berasal dari kata mager yang berarti malas (ber)gerak;
                        enggan atau sedang tidak bersemangat untuk melakukan
                        aktivitas. Sesuai definisinya, Kami menyediakan layanan
                        pembuatan sistem informasi yang dapat membantu Anda
                        dalam mengelola data dan pekerjaan Anda dengan lebih
                        efisien.{" "}
                        <span className="gloria">
                            {" "}
                            Sehingga hobi mager Anda dapat tersalurkan dan tidak
                            bekerja seharian penuh :&#41;
                        </span>
                    </p>
                </div>
                <div className="m-10">
                    <h1 className="text-3xl">Meet the Devs</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 my-5">
                        <div className="col-span-1 justify-self-center text-center mb-5">
                            <h2 className="mb-3">
                                <span className="gloria">&lt;/</span> Front-End
                                Guy <span className="gloria">&gt;</span>
                            </h2>
                            <div className="flex flex-row flex-wrap gap-3 justify-center">
                                <div>
                                    <div className="avatar">
                                        <div className="w-24 rounded">
                                            <Image
                                                src="https://placeimg.com/192/192/people"
                                                width={192}
                                                height={192}
                                                alt="orang"
                                            />
                                        </div>
                                    </div>
                                    <p className="gloria">Opi</p>
                                </div>
                                <div>
                                    <div className="avatar">
                                        <div className="w-24 rounded">
                                            <Image
                                                src="https://placeimg.com/192/192/people"
                                                width={192}
                                                height={192}
                                                alt="orang"
                                            />
                                        </div>
                                    </div>
                                    <p className="gloria">Jibi</p>
                                </div>
                                <div>
                                    <div className="avatar">
                                        <div className="w-24 rounded">
                                            <Image
                                                src="https://placeimg.com/192/192/people"
                                                width={192}
                                                height={192}
                                                alt="orang"
                                            />
                                        </div>
                                    </div>
                                    <p className="gloria">Fikri</p>
                                </div>
                                <div>
                                    <div className="avatar">
                                        <div className="w-24 rounded">
                                            <Image
                                                src="https://placeimg.com/192/192/people"
                                                width={192}
                                                height={192}
                                                alt="orang"
                                            />
                                        </div>
                                    </div>
                                    <p className="gloria">Ifanu</p>
                                </div>
                                <div>
                                    <div className="avatar">
                                        <div className="w-24 rounded">
                                            <Image
                                                src="https://placeimg.com/192/192/people"
                                                width={192}
                                                height={192}
                                                alt="orang"
                                            />
                                        </div>
                                    </div>
                                    <p className="gloria">Juned</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 justify-self-center text-center mb-5">
                            <h2 className="mb-3">
                                <span className="gloria"> &#123;</span> Back-End
                                Guy <span className="gloria"> &#125;</span>
                            </h2>
                            <div className="flex flex-row flex-wrap gap-3 justify-center">
                                <div>
                                    <div className="avatar">
                                        <div className="w-24 rounded">
                                            <Image
                                                src="https://placeimg.com/192/192/people"
                                                width={192}
                                                height={192}
                                                alt="orang"
                                            />
                                        </div>
                                    </div>
                                    <p className="gloria">Irwanda</p>
                                </div>
                                <div>
                                    <div className="avatar">
                                        <div className="w-24 rounded">
                                            <Image
                                                src="https://placeimg.com/192/192/people"
                                                width={192}
                                                height={192}
                                                alt="orang"
                                            />
                                        </div>
                                    </div>
                                    <p className="gloria">Farid</p>
                                </div>
                                <div>
                                    <div className="avatar">
                                        <div className="w-24 rounded">
                                            <Image
                                                src="https://placeimg.com/192/192/people"
                                                width={192}
                                                height={192}
                                                alt="orang"
                                            />
                                        </div>
                                    </div>
                                    <p className="gloria">Haykal</p>
                                </div>
                                <div>
                                    <div className="avatar">
                                        <div className="w-24 rounded">
                                            <Image
                                                src="https://placeimg.com/192/192/people"
                                                width={192}
                                                height={192}
                                                alt="orang"
                                            />
                                        </div>
                                    </div>
                                    <p className="gloria">Okyan</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="m-10">
                    <h1 className="text-3xl">Kontak Kami</h1>
                    <div className="flex flex-row flex-wrap gap-1">
                        <Link href={""} className="h-auto">
                            <button className="btn btn-ghost h-auto">
                                <Image
                                    src="/assets/instagram.svg"
                                    width={30}
                                    height={30}
                                    alt="ig"
                                />
                            </button>
                        </Link>
                        <Link href={""} className="h-auto">
                            <button className="btn btn-ghost h-auto">
                                <Image
                                    src="/assets/wa.svg"
                                    width={30}
                                    height={30}
                                    alt="wa"
                                />
                            </button>
                        </Link>
                    </div>
                </div>
            </Section>
        </>
    );
}

export const APP_VERSION = "v1.0.0";
