import { ArticleDTO } from "@/app/articles/dtos/articles";

export const articles: ArticleDTO[] = [
  {
    id: 1,
    title: "Artikel Pertama",
    slug: "artikel-pertama",
    image_url: "",
    excerpt: "Deskripsi singkat tentang artikel",
    author: "",
    content: `
      <h3 class="text-primary fw-bold lato-bold mb-3">Jangan Lupakan Peradangan Kronis sebagai Penyebab Penyakit Jantung</h3>
      <p class="MsoNormal" style="text-align:justify">Ketika kita membahas penyakit
jantung, mungkin pikiran langsung melayang ke kolesterol tinggi, kebiasaan
merokok, atau tekanan darah yang tak terkontrol. Namun, tahukah Anda bahwa ada
satu elemen "samar" yang sering terabaikan, padahal diam-diam bekerja merusak
sistem kardiovaskular kita? Yup, itulah peradangan kronis --musuh dalam selimut
yang bisa mengacaukan jantung dan pembuluh darah secara perlahan tapi pasti.
Bayangkan seperti api kecil di pojokan, dibiarkan menyala, lama-lama bisa
membakar seluruh rumah!</p>
    `,
    category: "bebas",
    created_at: new Date(),
    updated_at: new Date(),
  },
];
