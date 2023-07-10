export const Count: React.FC = () => {
    
    let i: number = 0;

    console.log('Rendered...')

    return (
        <div>
            <h2>I : {i} </h2>

            <button onClick={() => i += 12}>+ 12</button>

        </div>
    );
};



