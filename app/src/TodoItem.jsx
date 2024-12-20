

function TodoItem({text = 'Default Task'}) {

    return (
        <li>
            <hgroup>
                <button>
                    Tick
                </button>
                <p>
                    {text}
                </p>
            </hgroup>
        </li>
    );

}

export default TodoItem;