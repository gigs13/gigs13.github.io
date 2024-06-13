export default function Contacto ({ user }) {
    return (
        <div className='contact-info clearfix'> {/* Contacto */}
            <ul className='list-titles'>
                <li>Call</li>
                <li>Mail</li>
                <li>Web</li>
                <li>Home</li>
            </ul>
            <ul className='list-content '>
                <li>{user.phone}</li> {/* YOUR PHONE NUMBER  */}
                <li>{user.mail}</li> {/* YOUR EMAIL */}
                <li><a href={user.website}>{user.website}</a></li> {/* YOUR WEBSITE  */}
                <li>{user.city + ', ' + user.country}</li> {/* YOUR STATE AND COUNTRY  */}
            </ul>
        </div>
    );
}