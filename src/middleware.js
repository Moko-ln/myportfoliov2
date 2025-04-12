import { NextResponse } from "next/server";
import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";

// Liste des langues supportées (modifiée)
const locales = ["en", "fr"];
const defaultLocale = "fr";

/**
 * Détecte la meilleure langue en fonction des préférences du navigateur
 * @param {Request} request - Requête entrante
 * @returns {string} - Locale détectée
 */
function getLocale(request) {
  // Vérifie d'abord le cookie de langue
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale;
  }

  // Si pas de cookie, utilise les préférences du navigateur
  const acceptLanguage = request.headers.get("accept-language") || "";
  const languages = new Negotiator({ headers: { "accept-language": acceptLanguage } }).languages();
  return match(languages, locales, defaultLocale);
}

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Exclut les fichiers statiques dans `public` (comme `uploads`)
  if (pathname.startsWith("/uploads/")) {
    return NextResponse.next();
  }

  // Vérifie si l'URL contient déjà une locale supportée
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  // Récupère la meilleure langue et redirige vers l'URL avec la locale détectée
  const locale = getLocale(request);
  const newUrl = new URL(`/${locale}${pathname}`, request.url);

  // Crée une réponse avec la redirection et le cookie
  const response = NextResponse.redirect(newUrl);
  response.cookies.set("NEXT_LOCALE", locale, { 
    path: "/",
    maxAge: 60 * 60 * 24 * 365 // 1 an
  });

  return response;
}

export const config = {
  matcher: [
    // Exclut les fichiers internes de Next.js et les fichiers statiques dans `public`
    "/((?!_next|favicon.ico|images|api|uploads|resume-en.pdf|resume-fr.pdf).*)",
  ],
};