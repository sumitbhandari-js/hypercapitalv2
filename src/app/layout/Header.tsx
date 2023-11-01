/* This example requires Tailwind CSS v2.0+ */
"use client";
import { clsx } from "clsx";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

const about = [
  { name: "ABOUT US", href: "/about" },
  { name: "OUR TEAM MEMBERS", href: "#" },
];
const services = [
  { name: "HYPERCAPITAL BUSINESS AREAS", href: "#" },
  { name: "FINANCIAL INSTRUMENT DLC/SBLC/BG AND MONETIZATION", href: "#" },
  { name: "INVESTMENT IN FINANCIAL INSTEP TRADE PROGRAMS", href: "#" },
  { name: "PROJECT INVESTMENTS IN GREEN TECHNOLOGIES AND HEALTHCARE", href: "#" },
  { name: "COMMODITY TRADING, PETROLEUM PRODUCTS AND MINERALS AND PRECIOUS METALS", href: "#" },
  { name: "FOREX AND CRYTO TRADING", href: "#" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <header className="bg-white">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between xl:p-6 lg:p-6 md:p-6 p-4 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">HyperCapital</span>
              <Image src="/logo.svg" width={190} height={70} alt="HyperCapital" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <a href="/" className="text-xs font-semibold leading-6 text-gray-900">
              HOME
            </a>
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-xs font-semibold leading-6 text-gray-900 outline-none">
                ABOUT
                <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-56 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-900/5">
                  {about.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-xs font-semibold leading-6 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </Popover.Panel>
              </Transition>
            </Popover>

            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-xs font-semibold leading-6 text-gray-900 outline-none">
                SERVICES
                <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-56 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-900/5">
                  {services.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-xs font-semibold leading-6 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </Popover.Panel>
              </Transition>
            </Popover>

            <a href="#" className="text-xs font-semibold leading-6 text-gray-900">
              CAREERS
            </a>
            <a href="#" className="text-xs font-semibold leading-6 text-gray-900">
              BLOG
            </a>
            <a href="#" className="text-xs font-semibold leading-6 text-gray-900">
              CONTACT US
            </a>
          </Popover.Group>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">HyperCapital</span>
                <Image src="/logo.svg" width={190} height={70} alt="HyperCapital" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-xs font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    HOME
                  </a>

                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-xs font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          ABOUT
                          <ChevronDownIcon
                            className={clsx(open ? "rotate-180" : "", "h-5 w-5 flex-none")}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {about.map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-xs font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                              {item.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>

                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-xs font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          SERVICES
                          <ChevronDownIcon
                            className={clsx(open ? "rotate-180" : "", "h-5 w-5 flex-none")}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {about.map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-xs font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                              {item.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-xs font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    CAREERS
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-xs font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    BLOG
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-xs font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    CONTACT US
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
}
