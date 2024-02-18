import { FaFacebook, FaInstagram, FaPhone, FaWhatsapp } from "react-icons/fa";
import { Separator } from "./ui/separator";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container grid grid-flow-row grid-cols-1 gap-10 py-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className="text-lg font-medium">ALbashiq</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              sapiente possimus aperiam. Quas, fuga. Maiores, iste veniam!
              Voluptatum iste dignissimos, illo quam, quas esse doloremque
              officiis quisquam vel vitae voluptatem?
            </p>
          </div>

          <div>
            <h2 className="">Conatct</h2>
            <div>
              <p>Douma</p>
              <a href="mailto:services@albashiq.net" target="_blank">
                email services@albashiq.net
              </a>
              <p>
                Phone number: <span dir="ltr">(+972) 56 802 6177</span>
              </p>
            </div>
          </div>

          <div>
            <h2>Medai</h2>
            <div className="flex gap-5">
              <a
                href="https://www.facebook.com/share/ihaeooqofRT6mNac/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-xl transition text-opacity-80 md:text-2xl hover:" />
              </a>

              <a
                href="https://www.instagram.com/albashiqcleaning?igsh=OGQ5ZDc2ODk2ZA=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-xl transition text-opacity-80 md:text-2xl hover:" />
              </a>
              <a
                href="tel:+971568026177"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPhone className="text-xl transition text-opacity-80 md:text-2xl hover:" />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=+971568026177"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-xl transition text-opacity-80 md:text-2xl hover:" />
              </a>
            </div>
          </div>
        </div>
        <Separator />
        <div className="py-6 text-center">
          <p>
            <span className="ml-2">&copy; {new Date().getFullYear()} </span>
            ALbahsiq
          </p>
        </div>
      </footer>
    </>
  );
}
