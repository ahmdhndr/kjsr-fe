import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RegionDTO } from "@/shared/dtos/region-dto";

import { Button } from "./ui/button";

export function CardRegion({
  name,
  members,
  chairman,
  contact,
  email_org,
  address,
}: RegionDTO) {
  return (
    <Card className="overflow-hidden text-primary shadow-lg">
      <CardHeader className="p-0">
        <div className="!mt-0 p-4">
          <CardTitle>
            <Link
              href={"/"}
              className="flex items-center gap-2 hover:underline"
            >
              <Image
                src={"/logo-bg-transparan.png"}
                alt="Logo KJSR"
                width={40}
                height={40}
              />
              {name}
            </Link>
          </CardTitle>
          <CardDescription className="text-primary"></CardDescription>
        </div>
      </CardHeader>
      <CardContent className="px-4 pb-4">
        <div className="grid grid-cols-12 text-sm">
          <div className="col-span-5 flex flex-col justify-start gap-2">
            <p>Ketua</p>
            <p>Jumlah Anggota</p>
            <p>Kontak</p>
            <p>Email</p>
            <p>Alamat</p>
          </div>
          <div className="col-span-7 flex flex-col justify-start gap-2">
            <p>{chairman}</p>
            <p>{members}</p>
            <p>{contact}</p>
            <p className="line-clamp-1">{email_org}</p>
            <p className="line-clamp-3 text-balance">{address}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between px-4 pb-4 pt-0 text-sm">
        <Link href={"#"} className="w-full text-center">
          <Button variant={"link"}>Lihat Detail</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
