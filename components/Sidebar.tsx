"use client";

import { useSession, signOut } from "next-auth/react";
import NewChat from "./NewChat";

function Sidebar() {
	const { data: session } = useSession();

	return (
		<div className="p-2 flex flex-col h-screen">
			<div className="flex-1">
				<div>
					{/* NewChat Btn */}
					<NewChat />
					<div>{/* ModelSelection */}</div>

					{/* Chat Rows */}
				</div>
			</div>

			{session && (
				<img
					onClick={() => signOut()}
					src={session.user?.image!}
					alt="user profile pic"
					className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
				/>
			)}
		</div>
	);
}

export default Sidebar;
