import React from 'react';
import { Card } from "@chakra-ui/react";

interface Props {
    children: React.ReactNode;
    title: string;
    description?: string;
}

function CardChakra({ description, title, children }: Props) {
    return (
        <Card.Root w={'md'}>
            <Card.Header className='align-items-c'>
                <Card.Title>{title}</Card.Title>
            </Card.Header>
            <Card.Body>
                {children}
            </Card.Body>
            <Card.Footer className='justify-content-c'>
                {description && (
                    <Card.Description>
                        {description}
                    </Card.Description>
                )}
            </Card.Footer>
        </Card.Root>
    );
}

export default CardChakra;