
export default function Nombre ({ user }) {
    return (
        <div className="name-wrapper"> {/* Nombre */}
            <h1>{user.name}<br/>{user.lastName}</h1>
        </div>
    );
}