import Image from "next/image";

const About = () => {
    return (
        <article className="flex justify-center items-center">
            <Image src="/logo.jpeg" alt="Учебный центр" width={512} height={512}/>
            <div>
                <h1>О нас</h1>
                <p>Что-нибудь</p>
                <p>Учебный центр занимает лидирующие позиции в области эстетики медицны</p>
            </div>

        </article>
    );
}
 
export default About;