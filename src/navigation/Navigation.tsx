'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Item {
    title: string;
    href: string;
}

function Navigation({ items }: { items: Item[] }) {
    const pathname = usePathname();

    return (
        <nav>
            <ul className="   gap-8  border p-8 flex">
                {items.map((item, index) => (
                    <li key={index}>
                        <Link
                            href={item.href}
                            className={`px-4 py-2 rounded ${
                                pathname === item.href
                                    ? "text-black font-bold underline"
                                    : "text-gray-500"
                            }`}
                        >
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navigation;
