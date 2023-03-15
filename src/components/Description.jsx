export function Description({des}) {

    return Array.isArray(des) ?
        <figcaption className="col my-2 blockquote-footer">"{des.join("/")}" </figcaption>
        : <figcaption className="col my-2 blockquote-footer">"{des}"</figcaption>
}
