// @proxy
import { NextResponse } from "next/server";
import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";
import type { NextRequest } from "next/server";

const locales = ["fr", "en"];
const defaultLocale = "fr";

function getLocale(request: NextRequest) {
  const cookie = request.cookies.get("NEXT_LOCALE")?.value;

  if (cookie && locales.includes(cookie)) return cookie;

  const acceptLanguage = request.headers.get("accept-language") || "";
  const languages = new Negotiator({ headers: { "accept-language": acceptLanguage } }).languages();

  return match(languages, locales, defaultLocale);
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Exclusions
  if (pathname.startsWith("/_next") ||
      pathname.startsWith("/favicon") ||
      pathname.startsWith("/uploads") ||
      pathname.startsWith("/resume")
  ) return;

  // already localized
  if (locales.some((l) => pathname.startsWith(`/${l}`))) return;

  // redirect
  const locale = getLocale(request);
  const url = new URL(`/${locale}${pathname}`, request.url);

  return NextResponse.redirect(url);
}