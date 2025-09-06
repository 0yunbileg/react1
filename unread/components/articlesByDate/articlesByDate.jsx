import "./articlesByDate.css"
import ArticleBox from "../articleBox/articleBox";

const ArticlesByDate = () => {
    const articles1 = [
        {
            title: "Намар нээлтээ хийх бүтээлүүдээс онцлох 10 кино",
            category: "ЧӨЛӨӨТ",
            readTime: "6 мин",
            image: "/images/article11.jpeg"
        },
        {
            title: "Намар нээлтээ хийх бүтээлүүдээс онцлох 10 кино",
            category: "ЧӨЛӨӨТ",
            readTime: "6 мин",
            image: "/images/article12.jpg"
        },
        {
            title: "Намар нээлтээ хийх бүтээлүүдээс онцлох 10 кино",
            category: "ЧӨЛӨӨТ",
            readTime: "6 мин",
            image: "/images/article13.jpg"
        }
    ]

    const articles2 = [
        {
            title: "Намар нээлтээ хийх бүтээлүүдээс онцлох 10 кино",
            category: "ЧӨЛӨӨТ",
            readTime: "6 мин",
            image: "/images/article14.jpg"
        },
        {
            title: "Намар нээлтээ хийх бүтээлүүдээс онцлох 10 кино",
            category: "ЧӨЛӨӨТ",
            readTime: "6 мин",
            image: "/images/article15.png"
        },
        {
            title: "Намар нээлтээ хийх бүтээлүүдээс онцлох 10 кино",
            category: "ЧӨЛӨӨТ",
            readTime: "6 мин",
            image: "/images/article16.jpg"
        },
        {
            title: "Намар нээлтээ хийх бүтээлүүдээс онцлох 10 кино",
            category: "ЧӨЛӨӨТ",
            readTime: "6 мин",
            image: "/images/article17.jpg"
        }
    ]

    const articles3 = [
        {
            title: "Намар нээлтээ хийх бүтээлүүдээс онцлох 10 кино",
            category: "ЧӨЛӨӨТ",
            readTime: "6 мин",
            image: "/images/article18.jpg"
        },
        {
            title: "Намар нээлтээ хийх бүтээлүүдээс онцлох 10 кино",
            category: "ЧӨЛӨӨТ",
            readTime: "6 мин",
            image: "/images/article19.jpg"
        }, {
            title: "Намар нээлтээ хийх бүтээлүүдээс онцлох 10 кино",
            category: "ЧӨЛӨӨТ",
            readTime: "6 мин",
            image: "/images/article20.jpg"
        }
    ]

    const articles4 = [
        {
            title: "Намар нээлтээ хийх бүтээлүүдээс онцлох 10 кино",
            category: "ЧӨЛӨӨТ",
            readTime: "6 мин",
            image: "/images/article21.jpg"
        },
        {
            title: "Намар нээлтээ хийх бүтээлүүдээс онцлох 10 кино",
            category: "ЧӨЛӨӨТ",
            readTime: "6 мин",
            image: "/images/article22.jpg"
        },
        {
            title: "Намар нээлтээ хийх бүтээлүүдээс онцлох 10 кино",
            category: "ЧӨЛӨӨТ",
            readTime: "6 мин",
            image: "/images/article23.jpg"
        },
        {
            title: "Намар нээлтээ хийх бүтээлүүдээс онцлох 10 кино",
            category: "ЧӨЛӨӨТ",
            readTime: "6 мин",
            image: "/images/article24.jpg"
        }
    ]
    return (
        <div className="articlesByDateWrapper">
            <div className="dateControlWrapper">
                <div className="dateChoice">Өнгөрсөн 7 хоногт</div>
                <div className="dateChoice">08/11 - 08/17</div>
                <div className="dateChoice">08/04 - 08/10</div>
                <div className="dateChoice">07/28 - 08/03</div>
            </div>

            <div className="articlesGroupWrapper">
                <div className="articlesLeftGroup">
                    {
                        articles1.map(article =>
                            <div className="articleDiv">
                                <ArticleBox
                                    title={article.title}
                                    category={article.category}
                                    readTime={article.readTime}
                                    image={article.image}
                                />
                            </div>
                        )
                    }
                </div>

                <div className="articlesRightGroup">
                    {
                        articles2.map(article =>
                            <div className="articleDiv">
                                <ArticleBox
                                    title={article.title}
                                    category={article.category}
                                    readTime={article.readTime}
                                    image={article.image}
                                />
                            </div>
                        )
                    }
                </div>
            </div>

            <div className="articlesGroupWrapper">
                <div className="articlesLeftGroup">
                    {
                        articles3.map(article =>
                            <div className="articleDiv">
                                <ArticleBox
                                    title={article.title}
                                    category={article.category}
                                    readTime={article.readTime}
                                    image={article.image}
                                />
                            </div>
                        )
                    }
                </div>

                <div className="articlesRightGroup">
                    {
                        articles4.map(article =>
                            <div className="articleDiv">
                                <ArticleBox
                                    title={article.title}
                                    category={article.category}
                                    readTime={article.readTime}
                                    image={article.image}
                                />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>

    )
}

export default ArticlesByDate;