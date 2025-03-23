export default async function Page(props: {
    params: Promise<{ type: string }>;
}) {
    const params = await props.params;
    const { type } = params;

    return <>{type}</>;
}
