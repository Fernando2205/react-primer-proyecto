import { TwitterFollowCard } from "./twitterFollowCard"

export default function App() {
    const users = [
        {
            username: "alejoperez",
            name: "Alejandro Pepito Perez",
            initialIsFollowing: false
        }, {
            username: "deliopalacios",
            name: "Delio Fernando Palacios Viafara",
            initialIsFollowing: false
        }, {
            username: "gonzy",
            name: "Gonzalo Bejarano",
            initialIsFollowing: true
        }, {
            username: "julian",
            name: "Julian David",
            initialIsFollowing: true
        }
    ]
    return (
        <section className="flex flex-col gap-4">
            {
                users.map(user => {
                    const { username, name, initialIsFollowing } = user
                    return <TwitterFollowCard key={username} userName={username} name={name} initialIsFollowing={initialIsFollowing} />
                })
            }
        </section>
    )
}