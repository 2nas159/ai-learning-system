import {getCompanion, getCompanionMemory} from "@/lib/actions/companion.actions";
import {currentUser} from "@clerk/nextjs/server";
import {redirect} from "next/navigation";
import {getSubjectColor} from "@/lib/utils";
import Image from "next/image";
import CompanionComponent from "@/components/CompanionComponent";

interface CompanionSessionPageProps {
    params: Promise<{ id: string}>;
}

const CompanionSession = async ({ params }: CompanionSessionPageProps) => {
    const { id } = await params;
    const companion = await getCompanion(id);
    const user = await currentUser();

    const { name, subject, title, topic, duration } = companion;

    if(!user) redirect('/sign-in');
    if(!name) redirect('/companions')

    const pastMemory = await getCompanionMemory(user.id, id);

    return (
        <main>
            <article className="flex rounded-border justify-between p-6 max-md:flex-col max-md:gap-4">
                <div className="flex items-center gap-4">
                    <div className="size-[72px] flex items-center justify-center rounded-lg max-sm:size-[48px]" style={{ backgroundColor: getSubjectColor(subject)}}>
                        <Image src={`/icons/${subject}.svg`} alt={subject} width={35} height={35} className="max-sm:size-[24px]" />
                    </div>

                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                            <p className="font-bold text-2xl max-sm:text-xl">
                                {name}
                            </p>
                            <div className="subject-badge">
                                {subject}
                            </div>
                        </div>
                        <p className="text-lg max-sm:text-base opacity-70">{topic}</p>
                    </div>
                </div>
                <div className="flex items-center text-2xl max-md:text-lg font-medium">
                    {duration} minutes
                </div>
            </article>

            <CompanionComponent
                {...companion}
                companionId={id}
                userId={user.id}
                userName={user.firstName!}
                userImage={user.imageUrl!}
                pastMemory={pastMemory}
            />
        </main>
    )
}

export default CompanionSession
