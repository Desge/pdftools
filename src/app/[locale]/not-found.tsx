"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { SUPPORTED_LOCALES } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

const labels: Record<Locale, { title: string; desc: string; backHome: string }> = {
  en: { title: "Page Not Found", desc: "The page you are looking for does not exist or has been moved.", backHome: "Back to Home" },
  zh: { title: "页面未找到", desc: "您访问的页面不存在或已被移动。", backHome: "返回首页" },
  ja: { title: "ページが見つかりません", desc: "お探しのページは存在しないか、移動されました。", backHome: "ホームに戻る" },
  ko: { title: "페이지를 찾을 수 없습니다", desc: "찾으시는 페이지가 존재하지 않거나 이동되었습니다.", backHome: "홈으로 돌아가기" },
  es: { title: "Página no encontrada", desc: "La página que buscas no existe o ha sido movida.", backHome: "Volver al inicio" },
  fr: { title: "Page non trouvée", desc: "La page que vous recherchez n'existe pas ou a été déplacée.", backHome: "Retour à l'accueil" },
  de: { title: "Seite nicht gefunden", desc: "Die gesuchte Seite existiert nicht oder wurde verschoben.", backHome: "Zurück zur Startseite" },
  pt: { title: "Página não encontrada", desc: "A página que você procura não existe ou foi movida.", backHome: "Voltar ao início" },
  ru: { title: "Страница не найдена", desc: "Страница, которую вы ищете, не существует или была перемещена.", backHome: "Вернуться на главную" },
  ar: { title: "الصفحة غير موجودة", desc: "الصفحة التي تبحث عنها غير موجودة أو تم نقلها.", backHome: "العودة إلى الصفحة الرئيسية" },
  hi: { title: "पृष्ठ नहीं मिला", desc: "आप जिस पृष्ठ की तलाश कर रहे हैं वह मौजूद नहीं है या ले जाया गया है।", backHome: "होम पर वापस जाएं" },
  it: { title: "Pagina non trovata", desc: "La pagina che stai cercando non esiste o è stata spostata.", backHome: "Torna alla home" },
};

export default function NotFound() {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const pathLocale = window.location.pathname.split("/")[1] as Locale;
    if (SUPPORTED_LOCALES.includes(pathLocale)) {
      setLocale(pathLocale);
    }
  }, []);

  const t = labels[locale];

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <div className="mb-6 text-8xl">🔍</div>
      <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">{t.title}</h1>
      <p className="mb-8 max-w-md text-gray-600 dark:text-gray-400">{t.desc}</p>
      <Link
        href={`/${locale}/`}
        className="rounded-lg bg-purple-600 px-6 py-3 font-medium text-white hover:bg-purple-700"
      >
        {t.backHome}
      </Link>
    </div>
  );
}
