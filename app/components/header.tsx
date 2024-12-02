import StarButton from './star';

export default function Header() {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1 flex justify-center">
                <a className="btn btn-ghost text-xl">Osint Search Builder</a>
            </div>
            <StarButton />
        </div>
    );
}