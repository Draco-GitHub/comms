import React, { useState } from 'react';

interface AvatarProps {
    src: string;
    size?: number;
    alt?: string;
    status?: 'online' | 'offline' | 'away' | 'busy';
}

const statusColors: Record<NonNullable<AvatarProps['status']>, string> = {
    online: '#43b581',   // green
    offline: '#82838b',  // gray
    away: '#faa61a',     // orange
    busy: '#f04747',     // red
};

const Avatar: React.FC<AvatarProps> = ({
                                           src,
                                           size = 100,
                                           alt = 'Avatar',
                                           status,
                                       }) => {
    const [hasError, setHasError] = useState(false);

    const avatarStyle: React.CSSProperties = {
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: '#ccc',
        position: 'relative',
        display: 'inline-block',
    };

    const imageStyle: React.CSSProperties = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: hasError ? 'none' : 'block',
    };

    const statusOuterSize = size * 0.28;
    const statusInnerSize = size * 0.2;

    const statusOuterStyle: React.CSSProperties = {
        width: statusOuterSize,
        height: statusOuterSize,
        borderRadius: '50%',
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 2,
        right: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
    };

    const statusInnerStyle: React.CSSProperties = {
        width: statusInnerSize,
        height: statusInnerSize,
        borderRadius: '50%',
        backgroundColor: status ? statusColors[status] : 'transparent',
    };

    return (
        <div style={avatarStyle}>
            <img
                src={src}
                alt={alt}
                style={imageStyle}
                onError={() => setHasError(true)}
            />
            {status && (
                <div style={statusOuterStyle}>
                    <div style={statusInnerStyle}></div>
                </div>
            )}
        </div>
    );
};

export default Avatar;
