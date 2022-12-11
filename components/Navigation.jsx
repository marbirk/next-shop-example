import Link from "next/link";
import Image from "next/image";
import { IoCart } from "react-icons/io5";
import { Badge } from "react-bootstrap";

export default function Navigation() {
  return (
    <div className="shadow sticky-top p-2 mb-2 bg-danger">
      <div className="d-flex justify-content-between align-items-center">
        <Link href="/">
          <Image src={"/images/logo.png"} alt="Logo" width={180} height={72} />
        </Link>
        <Link href="/cart">
          <IoCart className="text-light fs-4" />
          <Badge pill bg="success">
            2
          </Badge>
        </Link>
      </div>
    </div>
  );
}
