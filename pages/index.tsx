import Image from "next/image";
import Section from "../components/Section";

export default function Home() {
    return (
        <>
            <div className="hero min-h-screen bg-base-200 overflow-hidden">
                <div className="hero-content text-center overflow-hidden">
                    <div className="max-w-lg">
                        <Image
                            src="/assets/HeroLogo.svg"
                            width={650}
                            height={153}
                            alt="hero logo"
                        />
                        <p className="py-6 w-full">
                            &#34;Kamu merasa hidupmu berat? Kamu perlu tahu
                            bahwa pekerjaan akan terasa sangat ringan apabila{" "}
                            <del>tidak kamu kerjakan</del> .&#34;
                        </p>
                        <Image
                            src="/assets/manajemen.svg"
                            width={531}
                            height={161}
                            alt="manajemen"
                            className="absolute right-1/4 bottom-80 -z-10"
                        />
                        <a href="#section-why">
                            <button className="btn btn-primary mt-16">
                                Kok bisa?
                            </button>
                        </a>
                    </div>
                    <Image
                        src="/assets/wave.svg"
                        width={1920}
                        height={50}
                        alt="wave"
                        className="absolute bottom-0 w-full -z-10"
                    />
                </div>
            </div>
            <Section id="section-why" className={"bg-primary pt-16"}>
                <div className="h-full mt-32">
                    <h1
                        id="why-title"
                        className="text-primary-content text-center gloria text-2xl">
                        3 Poin penting yang harus Kamu tahu !
                    </h1>
                    <div className="mt-20 w-1/2 mx-auto">
                        <div
                            tabIndex={0}
                            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-3">
                            <div className="collapse-title text-xl font-medium">
                                1. Efisiensi Penyimpanan Data
                            </div>
                            <div className="collapse-content">
                                <p>
                                    Jutaan data fisik yang biasanya menumpuk
                                    memenuhi rak jika tersimpan dalam bentuk
                                    digital akan lebih mudah dan lebih cepat
                                    dicari apabila dikelola dengan baik.
                                </p>
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-3">
                            <div className="collapse-title text-xl font-medium">
                                2. Otomasi Sistem
                            </div>
                            <div className="collapse-content">
                                <p>
                                    Semua pekerjaan yang berulang akan lebih
                                    mudah dan cepat dengan menggunakan otomasi
                                    sistem.{" "}
                                    <span className="gloria">
                                        Jadi, Kamu bisa fokus ngembangin produk
                                        Kamu :)
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-3">
                            <div className="collapse-title text-xl font-medium">
                                3. Fitur yang Kami tawarkan
                            </div>
                            <div className="collapse-content">
                                <ul>
                                    <li>- Pengerjaan Cepat</li>
                                    <li>- Harga Terjangkau</li>
                                    <li>- Menggunakan teknologi ter-update</li>
                                    <li>- Dapat mengkustom pemesanan</li>
                                    <li>
                                        - Gratis maintenance sampai 3 bulan dan
                                        revisi 3 kali setelah aplikasi dideploy
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
            <Section className="pt-0">
                <Image
                    src="/assets/wave2.svg"
                    width={1920}
                    height={50}
                    alt="wave2"
                    className="w-full"
                />
                <div className="">tes section 2</div>
            </Section>
        </>
    );
}
