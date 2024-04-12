'use client';

import Error from 'next/error';

export default function Notfound() {
    return (
        <html>
            <body>
            <Error statusCode={404} />
            </body>
        </html>
    );
}