
'use client';

import React from 'react';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-base-300 bg-base-200 font-serif">
      <div className="mx-auto max-w-7xl px-6 py-12">

        {/* Main Footer */}
        <div className="grid gap-10 md:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">
                <Link href="/" className="inline-block">
                    <Image
                        src="/assets/images/logo/chicagoverse-wordmark.svg"
                        alt="Chicagoverse"
                        width={400}
                        height={105}
                        className="h-auto w-48"
                        priority
                    />
                </Link>
            </h2>

            <p className="mt-4 text-sm leading-6 opacity-80">
              Discover Chicago through local opportunities, jobs,
              housing, finance, community stories, and more.
            </p>

            <p className="mt-4 text-sm opacity-70">
              Built for Chicago. Powered by the community.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Explore
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/jobs"
                  className="transition-opacity hover:opacity-60"
                >
                  Jobs & Careers
                </Link>
              </li>

              <li>
                <Link
                  href="/housing"
                  className="transition-opacity hover:opacity-60"
                >
                  Housing
                </Link>
              </li>

              <li>
                <Link
                  href="/finance"
                  className="transition-opacity hover:opacity-60"
                >
                  Finance
                </Link>
              </li>

              <li>
                <Link
                  href="/opportunities"
                  className="transition-opacity hover:opacity-60"
                >
                  Opportunities
                </Link>
              </li>
            </ul>
          </div>

          {/* Chicagoverse */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Chicagoverse
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="transition-opacity hover:opacity-60"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/blog"
                  className="transition-opacity hover:opacity-60"
                >
                  Our Blog
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition-opacity hover:opacity-60"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy"
                  className="transition-opacity hover:opacity-60"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms"
                  className="transition-opacity hover:opacity-60"
                >
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Follow Chicago
            </h3>

            <p className="mb-5 text-sm leading-6 opacity-80">
              Follow Chicagoverse for new stories, opportunities,
              and updates from around Chicago.
            </p>

            <div className="flex gap-3">

              {/* Instagram */}
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chicagoverse on Instagram"
                className="btn btn-ghost btn-circle"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="w-6"
                />
              </Link>

              {/* Facebook */}
              <Link
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chicagoverse on Facebook"
                className="btn btn-ghost btn-circle"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="w-6"
                />
              </Link>

            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div
          className=" mt-12 flex flex-col gap-3 border-t border-base-300 pt-6 text-center text-sm opacity-70
            md:flex-row md:items-center md:justify-between md:text-left
          "
        >

          {/* Copyright */}
          <p>
            © {new Date().getFullYear()} Chicagoverse.
            All rights reserved.
          </p>

          {/* Developer */}
          <p>
            Built by{' '}
            <Link
              href="https://alexcabrera.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:opacity-60"
            >
              AC Developer
            </Link>
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;

