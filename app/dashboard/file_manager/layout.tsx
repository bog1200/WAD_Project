import React from "react";
import {getUserRoles} from "@/app/actions/user";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "File Manager | Moodle++",
    description: "File Manager for Moodle++",
};

export default async function FileTestLayout({children, list, upload}: {children: React.ReactNode, list: React.ReactNode, upload: React.ReactNode}) {
    const roles = await getUserRoles();
    if (!roles!.isAdmin) {
        return (
            <h1>Unauthorized</h1>
        );
    }
    return (
        <div>
            <h1>Files</h1>
            {list}
            {children}
            {upload}
        </div>
    );
}