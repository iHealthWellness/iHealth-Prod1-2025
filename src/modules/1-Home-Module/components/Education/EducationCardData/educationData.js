export const Audience = Object.freeze({
    Patient: "Patient",
    Provider: "Provider",
    Caregiver: "Caregiver",
});

// Show diseases linked to articles
// Future development - link to diseases API 
export const Disease = Object.freeze({
    Neurofibromatosis: "Neurofibromatosis"
});

export const Type = Object.freeze({
    NF1: "NF1",
    All: "All",
    NF2: "NF2",
    SWN_NF3: "SWN(NF3)",
    NF2_SWN_NF3: "NF2/SWN(NF3)",

});

export const Categories = Object.freeze({
    Article: "Article",
    Podcast: "Podcast",
    PDF: "PDF",
    Clinical_Study: "Clinical Study",
    Academic_Journal: "Academic Journal",
});


export const educationData = [
    {
        id:1,
        name: "Kid's Health: Neurofibromatosis",
        disease: "Neurofibromatosis",
        focus: "Children",        
        audience: Audience.Caregiver,
        subCategories: [Type.NF1, Categories.Article],
        content:
            "Find support and guidance as you navigate the role of a caregiver for someone with NF. Access resources that provide insights into caregiving strategies, emotional support, and ways to optimize the quality of life for your loved ones.",
        contentLink: "https://kidshealth.org/en/parents/nf.html",
    },

    {
        id:2,
        name: "Caring for Adults With Neurofibromatosis Type 1 (Podcast)",
        disease: "Neurofibromatosis",
        audience: Audience.Caregiver,
        subCategories: [Type.NF1, Categories.Podcast],
        content:
            "Find support and guidance as you navigate the role of a caregiver for someone with NF. Access resources that provide insights into caregiving strategies, emotional support, and ways to optimize the quality of life for your loved ones.",
        contentLink: "https://consultqd.clevelandclinic.org/caring-for-adults-with-neurofibromatosis-type-1-podcast/",
    },

    {
        id:3,
        name: "Caring for children with neurofibromatosis type 1",
        disease: "Neurofibromatosis",
        focus: "Children",
        audience: Audience.Caregiver,
        subCategories: [Type.NF1, Categories.PDF],
        content:
            "Find support and guidance as you navigate the role of a caregiver for someone with NF. Access resources that provide insights into caregiving strategies, emotional support, and ways to optimize the quality of life for your loved ones.",
        contentLink: "https://nursing.ceconnection.com/ovidfiles/00152193-201904000-00009.pdf",
    },
    {
        id:4,
        name: "Neurofibromatosis in Kids",
        disease: "Neurofibromatosis",
        focus: "Children",
        audience: Audience.Caregiver,
        subCategories: [Type.NF1, Categories.Article],
        content:
            "Find support and guidance as you navigate the role of a caregiver for someone with NF. Access resources that provide insights into caregiving strategies, emotional support, and ways to optimize the quality of life for your loved ones.",
        contentLink: "https://www.aboutkidshealth.ca/fr/Article?contentid=867&language=English",
    },
    {
        id:5,
        name: "Neurofibromatosis type 1 (NF1) KIDS",
        disease: "Neurofibromatosis",
        focus: "Children",
        audience: Audience.Caregiver,
        subCategories: [Type.NF1, Categories.Article],
        content:
            "Find support and guidance as you navigate the role of a caregiver for someone with NF. Access resources that provide insights into caregiving strategies, emotional support, and ways to optimize the quality of life for your loved ones.",
        contentLink: "https://www.rch.org.au/kidsinfo/fact_sheets/Neurofibromatosis/",
    },
    {
        id:6,
        name: "Neurofibromatosis Type 1 - For Parents",
        disease: "Neurofibromatosis",
        audience: Audience.Caregiver,
        subCategories: [Type.All, Categories.Article],
        content:
            "Find support and guidance as you navigate the role of a caregiver for someone with NF. Access resources that provide insights into caregiving strategies, emotional support, and ways to optimize the quality of life for your loved ones.",
        contentLink: "https://kidshealth.org/HumanaOhio/en/parents/nf.html",
    },
    {
        id:7,
        name: "Neurofibromatosis Type 1: What Parents Should Know",
        disease: "Neurofibromatosis",
        audience: Audience.Caregiver,
        subCategories: [Type.NF1, Categories.Article],
        content:
            "Find support and guidance as you navigate the role of a caregiver for someone with NF. Access resources that provide insights into caregiving strategies, emotional support, and ways to optimize the quality of life for your loved ones.",
        contentLink: "https://health.choc.org/neurofibromatosis-type-1-what-parents-should-know/",
    },
    {
        id:8,
        name: "Neurofibromatosis (NF) - for Children",
        disease: "Neurofibromatosis",
        focus: "Children",
        audience: Audience.Caregiver,
        subCategories: [Type.All, Categories.Article],
        content:
            "Find support and guidance as you navigate the role of a caregiver for someone with NF. Access resources that provide insights into caregiving strategies, emotional support, and ways to optimize the quality of life for your loved ones.",
        contentLink: "https://www.seattlechildrens.org/conditions/neurofibromatosis/",
    },
    {
        id:9,
        name: "Neurofibromatosis Type 2 - in Children",
        disease: "Neurofibromatosis",
        focus: "Children",
        audience: Audience.Caregiver,
        subCategories: [Type.NF2, Categories.Article],
        content:
            "Find support and guidance as you navigate the role of a caregiver for someone with NF. Access resources that provide insights into caregiving strategies, emotional support, and ways to optimize the quality of life for your loved ones.",
        contentLink: "https://www.childrenshospital.org/conditions/neurofibromatosis-type-2",
    },
    {
        id:10,
        name: "Neurofibromatosis",
        disease: "Neurofibromatosis",
        audience: Audience.Patient,
        subCategories: [Type.NF1, Categories.Article],
        content:
            "Discover a wealth of resources to understand NF better, from treatment options to daily management strategies. Gain the knowledge to confidently navigate your NF journey with resilience and optimism.",
        contentLink: "http://www.nhs.uk/conditions/Neurofibromatosis/pages/symptoms.aspx",
    },
    {
        id:11,
        name: "Neurofibromatosis type 1 - Causes",
        disease: "Neurofibromatosis",
        audience: Audience.Patient,
        subCategories: [Type.NF1, Categories.Article],
        content:
            "Discover a wealth of resources to understand NF better, from treatment options to daily management strategies. Gain the knowledge to confidently navigate your NF journey with resilience and optimism.",
        contentLink: "http://www.nhs.uk/conditions/neurofibromatosis/pages/causes.aspx",
    },
    {
        id:12,
        name: "Neurofibromatosis. What is neurofibromatosis? Type 1 (NF1)",
        disease: "Neurofibromatosis",
        audience: Audience.Patient,
        subCategories: [Type.NF1, Categories.Article],
        content:
            "Discover a wealth of resources to understand NF better, from treatment options to daily management strategies. Gain the knowledge to confidently navigate your NF journey with resilience and optimism.",
        contentLink: "http://www.nhs.uk/Conditions/Neurofibromatosis/Pages/Treatment.aspx",
    },
    {
        id:13,
        name: "Neurofibromatosis Fact Sheet",
        disease: "Neurofibromatosis",
        audience: Audience.Patient,
        subCategories: [Type.All, Categories.Article],
        content:
            "Discover a wealth of resources to understand NF better, from treatment options to daily management strategies. Gain the knowledge to confidently navigate your NF journey with resilience and optimism.",
        contentLink: "https://www.ninds.nih.gov/Disorders/Patient-Caregiver-Education/Fact-Sheets/Neurofibromatosis-Fact-Sheet",
    },
    {
        id:14,
        name: "NINDS Neurofibromatosis Information Page",
        disease: "Neurofibromatosis",
        audience: Audience.Patient,
        subCategories: [Type.All, Categories.Article],
        content:
            "Discover a wealth of resources to understand NF better, from treatment options to daily management strategies. Gain the knowledge to confidently navigate your NF journey with resilience and optimism.",
        contentLink: "https://www.genome.gov/14514225/",
    },
    {
        id:15,
        name: "National Institute of Neurological Disorders and Stroke - information on Neurofibromatosis",
        disease: "Neurofibromatosis",
        audience: Audience.Patient,
        subCategories: [Type.All, Categories.Article],
        content:
            "Discover a wealth of resources to understand NF better, from treatment options to daily management strategies. Gain the knowledge to confidently navigate your NF journey with resilience and optimism.",
        contentLink: "https://www.ninds.nih.gov/Disorders/All-Disorders/Neurofibromatosis-Information-Page",
    },
    {
        id:16,
        name: "Neurofibromatosis 2",
        disease: "Neurofibromatosis",
        audience: Audience.Patient,
        subCategories: [Type.NF2, Categories.Article],
        content:
            "Discover a wealth of resources to understand NF better, from treatment options to daily management strategies. Gain the knowledge to confidently navigate your NF journey with resilience and optimism.",
        contentLink: "http://ghr.nlm.nih.gov/condition/neurofibromatosis-type-2",
    },
    {
        id:17,
        name: "Neurofibromatosis Type 2",
        disease: "Neurofibromatosis",
        audience: Audience.Patient,
        subCategories: [Type.NF2, Categories.Article],
        content:
            "Discover a wealth of resources to understand NF better, from treatment options to daily management strategies. Gain the knowledge to confidently navigate your NF journey with resilience and optimism.",
        contentLink: "http://www.nhs.uk/Conditions/neurofibromatosis-type-2/Pages/Treatment.aspx",
    },
    {
        id:18,
        name: "Schwannomatosis",
        audience: Audience.Patient,
        subCategories: [Type.SWN_NF3, Categories.Article],
        content:
            "Discover a wealth of resources to understand NF better, from treatment options to daily management strategies. Gain the knowledge to confidently navigate your NF journey with resilience and optimism.",
        contentLink: "https://www.hopkinsmedicine.org/health/conditions-and-diseases/neurofibromatosis/schwannomatosis",
    },
    {
        id:19,
        name: "Schwannomatosis",
        audience: Audience.Patient,
        subCategories: [Type.SWN_NF3, Categories.Article],
        content:
            "Discover a wealth of resources to understand NF better, from treatment options to daily management strategies. Gain the knowledge to confidently navigate your NF journey with resilience and optimism.",
        contentLink: "https://rarediseases.info.nih.gov/diseases/4768/schwannomatosis",
    },
    {
        id:20,
        name: "Schwannomatosis",
        audience: Audience.Patient,
        subCategories: [Type.SWN_NF3, Categories.Article],
        content:
            "Discover a wealth of resources to understand NF better, from treatment options to daily management strategies. Gain the knowledge to confidently navigate your NF journey with resilience and optimism.",
        contentLink: "https://medlineplus.gov/genetics/condition/schwannomatosis/",
    },
    {
        id:21,
        name: "Neurofibromatosis Type 1 (NF1): Addressing the Transition from Pediatric to Adult Care",
        disease: "Neurofibromatosis",
        focus: "Children",
        audience: Audience.Patient,
        subCategories: [Type.NF1, Categories.Article],
        content:
            "Discover a wealth of resources to understand NF better, from treatment options to daily management strategies. Gain the knowledge to confidently navigate your NF journey with resilience and optimism.",
        contentLink: "https://www.dovepress.com/neurofibromatosis-type-1-nf1-addressing-the-transition-from-pediatric--peer-reviewed-fulltext-article-PHMT",
    },
    {
        id:22,
        name: "Neurofibromatosis Type 1",
        disease: "Neurofibromatosis",
        audience: Audience.Patient,
        subCategories: [Type.All, Categories.Article],
        content:
            "Discover a wealth of resources to understand NF better, from treatment options to daily management strategies. Gain the knowledge to confidently navigate your NF journey with resilience and optimism.",
        contentLink: "https://www.mayoclinic.org/diseases-conditions/neurofibromatosis/symptoms-causes/syc-20350490",
    },
    {
        id:23,
        name: "Neurofibromatosis",
        disease: "Neurofibromatosis",
        audience: Audience.Patient,
        subCategories: [Type.All, Categories.Article],
        content:
            "Discover a wealth of resources to understand NF better, from treatment options to daily management strategies. Gain the knowledge to confidently navigate your NF journey with resilience and optimism.",
        contentLink: "https://www.cancercenter.com/risk-factors/neurofibromatosis",
    },
    {
        id:24,
        name: "What Is Neurofibromatosis?",
        disease: "Neurofibromatosis",
        audience: Audience.Patient,
        subCategories: [Type.All, Categories.Article],
        content:
            "Discover a wealth of resources to understand NF better, from treatment options to daily management strategies. Gain the knowledge to confidently navigate your NF journey with resilience and optimism.",
        contentLink: "https://www.cincinnatichildrens.org/health/n/neurofibromatosis",
    },
    {
        id:25,
        name: "Types of Neurofibromatosis",
        disease: "Neurofibromatosis",
        audience: Audience.Patient,
        subCategories: [Type.All, Categories.Article],
        content:
            "Discover a wealth of resources to understand NF better, from treatment options to daily management strategies. Gain the knowledge to confidently navigate your NF journey with resilience and optimism.",
        contentLink: "https://nyulangone.org/conditions/neurofibromatosis/types",
    },
    {
        id:26,
        name: "Care of adults with neurofibromatosis type 1: a clinical practice resource of the American College of Medical Genetics and Genomics (ACMG)",
        disease: "Neurofibromatosis",
        audience: Audience.Patient,
        subCategories: [Type.All, Categories.PDF],
        content:
            "Discover a wealth of resources to understand NF better, from treatment options to daily management strategies. Gain the knowledge to confidently navigate your NF journey with resilience and optimism.",
        contentLink: "https://www.nfmidwest.org/wp-content/uploads/2018/04/Adult-Care-Guidelines.pdf",
    },
    {
        id:27,
        name: "Neurofibromatosis",
        disease: "Neurofibromatosis",
        audience: Audience.Patient,
        subCategories: [Type.All, Categories.Article],
        content:
            "Discover a wealth of resources to understand NF better, from treatment options to daily management strategies. Gain the knowledge to confidently navigate your NF journey with resilience and optimism.",
        contentLink: "https://www.healthdirect.gov.au/neurofibromatosis",
    },
    {
        id:28,
        name: "Neurofibromatosis (NF) - Patient Information",
        disease: "Neurofibromatosis",
        audience: Audience.Patient,
        subCategories: [Type.All, Categories.Article],
        content:
            "Discover a wealth of resources to understand NF better, from treatment options to daily management strategies. Gain the knowledge to confidently navigate your NF journey with resilience and optimism.",
        contentLink: "https://www.massgeneralbrigham.org/en/patient-care/international/treatments-and-specialties/cancer-care/neuro-oncology/neurofibromatosis",
    },
    {
        id:29,
        name: "Neurofibromatosis Fact Sheet",
        disease: "Neurofibromatosis",
        audience: Audience.Patient,
        subCategories: [Type.All, Categories.PDF],
        content:
            "Discover a wealth of resources to understand NF better, from treatment options to daily management strategies. Gain the knowledge to confidently navigate your NF journey with resilience and optimism.",
        contentLink: "https://www.nfmidwest.org/wp-content/uploads/2016/03/Neurofibromatosis-Fact-Sheet.pdf",
    },
    {
        id:30,
        name: "LIVING WITH NEUROFIBROMATOSIS TYPE 1: A GUIDE FOR ADULTS",
        disease: "Neurofibromatosis",
        audience: Audience.Patient,
        subCategories: [Type.NF1, Categories.PDF],
        content:
            "Discover a wealth of resources to understand NF better, from treatment options to daily management strategies. Gain the knowledge to confidently navigate your NF journey with resilience and optimism.",
        contentLink: "https://bpb-us-w2.wpmucdn.com/sites.wustl.edu/dist/2/3467/files/2012/04/Adult-NF-Brochure.pdf",
    },
    {
        id:31,
        name: "NEUROFIBROMATOSIS TYPE 1 FACT SHEET",
        disease: "Neurofibromatosis",
        audience: Audience.Patient,
        subCategories: [Type.NF1, Categories.PDF],
        content:
            "Discover a wealth of resources to understand NF better, from treatment options to daily management strategies. Gain the knowledge to confidently navigate your NF journey with resilience and optimism.",
        contentLink: "https://www.genetics.edu.au/PDF/Neurofibromatosis_type_1_fact_sheet-CGE.pdf",
    },
    {
        id:32,
        name: "Facts for people and families with Neurofibromatosis type 1 (NF1)",
        disease: "Neurofibromatosis",
        audience: Audience.Patient,
        subCategories: [Type.NF1, Categories.Article],
        content:
            "Discover a wealth of resources to understand NF better, from treatment options to daily management strategies. Gain the knowledge to confidently navigate your NF journey with resilience and optimism.",
        contentLink: "https://www.eviq.org.au/cancer-genetics/consumer-information/3449-facts-for-people-and-families-with-neurofibro",
    },
    {
        id:33,
        name: "Facts for people and families with Neurofibromatosis type 2 (NF2)",
        disease: "Neurofibromatosis",
        audience: Audience.Patient,
        subCategories: [Type.NF2, Categories.Article],
        content:
            "Discover a wealth of resources to understand NF better, from treatment options to daily management strategies. Gain the knowledge to confidently navigate your NF journey with resilience and optimism.",
        contentLink: "https://www.eviq.org.au/cancer-genetics/consumer-information/3450-facts-for-people-and-families-with-neurofibro",
    },
    {
        id:34,
        name: "Neurofibromatosis Center - Washington University School of Medicine",
        disease: "Neurofibromatosis",
        audience: Audience.Patient,
        subCategories: [Type.NF1, Categories.Article],
        content:
            "Discover a wealth of resources to understand NF better, from treatment options to daily management strategies. Gain the knowledge to confidently navigate your NF journey with resilience and optimism.",
        contentLink: "https://nfcenter.wustl.edu/about-nf/neurofibromatosis-type-1/nf1-skin-bone-eye-abnormalities/",
    },
    {
        id:35,
        name: "Neurofibromatosis Information & Fact Sheet",
        disease: "Neurofibromatosis",
        audience: Audience.Patient,
        subCategories: [Type.All, Categories.Article],
        content:
            "Discover a wealth of resources to understand NF better, from treatment options to daily management strategies. Gain the knowledge to confidently navigate your NF journey with resilience and optimism.",
        contentLink: "https://www.ninds.nih.gov/health-information/disorders/neurofibromatosis",
    },
    {
        id:36,
        name: "A Guide FOR NF PATIENTS AND CAREGIVERS -Transitioning to Adult Care",
        disease: "Neurofibromatosis",
        audience: Audience.Patient,
        subCategories: [Type.All, Categories.Article],
        content:
            "Discover a wealth of resources to understand NF better, from treatment options to daily management strategies. Gain the knowledge to confidently navigate your NF journey with resilience and optimism.",
        contentLink: "https://www.cancer.gov/pediatric-adult-rare-tumor/support/transitioningtoadultcare",
    },
    {
        id:37,
        name: "Neurofibromatosis 1",
        disease: "Neurofibromatosis",
        audience: Audience.Provider,
        subCategories: [Type.NF1, Categories.Article],
        content:
            "Access cutting-edge information, research updates, and best practices to enhance your care for NF patients.",
        contentLink: "http://www.ncbi.nlm.nih.gov/books/NBK1109/",
    },
    {
        id:38,
        name: "National Library of Medicine Genetics NF1",
        disease: "Neurofibromatosis",
        audience: Audience.Provider,
        subCategories: [Type.NF1, Categories.Article],
        content:
            "Access cutting-edge information, research updates, and best practices to enhance your care for NF patients.",
        contentLink: "http://ghr.nlm.nih.gov/condition/neurofibromatosis-type-1",
    },
    {
        id:39,
        name: "Neurofibromatosis type 1",
        disease: "Neurofibromatosis",
        audience: Audience.Provider,
        subCategories: [Type.NF1, Categories.Article],
        content:
            "Access cutting-edge information, research updates, and best practices to enhance your care for NF patients.",
        contentLink: "https://doi.org/10.1038%2Fsj.ejhg.5201676",
    },
    {
        id:40,
        name: "Neurofibromatosis 1",
        disease: "Neurofibromatosis",
        audience: Audience.Provider,
        subCategories: [Type.NF1, Categories.Article],
        content:
            "Access cutting-edge information, research updates, and best practices to enhance your care for NF patients.",
        contentLink: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2716546",
    },
    {
        id:41,
        name: "Neurofibromatosis type 1",
        disease: "Neurofibromatosis",
        audience: Audience.Provider,
        subCategories: [Type.NF1, Categories.Article],
        content:
            "Access cutting-edge information, research updates, and best practices to enhance your care for NF patients.",
        contentLink: "https://patient.info/doctor/neurofibromatosis-pro",
    },
    {
        id:42,
        name: "Neurofibromatosis for Medical Professionals",
        disease: "Neurofibromatosis",
        audience: Audience.Provider,
        subCategories: [Type.All, Categories.Article],
        content:
            "Access cutting-edge information, research updates, and best practices to enhance your care for NF patients.",
        contentLink: "https://patient.info/doctor/Neurofibromatosis",
    },
    {
        id:43,
        name: "Neurofibromatosis from Head to Toe: What the Radiologist Needs to Know",
        disease: "Neurofibromatosis",
        audience: Audience.Provider,
        subCategories: [Type.All, Categories.Article],
        content:
            "Access cutting-edge information, research updates, and best practices to enhance your care for NF patients.",
        contentLink: "https://pubmed.ncbi.nlm.nih.gov/35749292",
    },
    {
        id:44,
        name: "Neurocutaneous Disorders",
        audience: Audience.Provider,
        subCategories: [Type.NF2_SWN_NF3, Categories.Clinical_Study],
        content:
            "Access cutting-edge information, research updates, and best practices to enhance your care for NF patients.",
        contentLink: "http://www.ncbi.nlm.nih.gov/books/NBK1201/",
    },
    {
        id:45,
        name: "Neurofibromatosis Type 1: Review of Cutaneous and Subcutaneous Tumor Treatment on Quality of Life",
        disease: "Neurofibromatosis",
        audience: Audience.Provider,
        subCategories: [Type.NF1, Categories.Article],
        content:
            "Access cutting-edge information, research updates, and best practices to enhance your care for NF patients.",
        contentLink: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6382221/",
    },
    {
        id:46,
        name: "Current Understanding of Neurofibromatosis Type 1, 2, and Schwannomatosis",
        disease: "Neurofibromatosis",
        audience: Audience.Provider,
        subCategories: [Type.All, Categories.Article],
        content:
            "Access cutting-edge information, research updates, and best practices to enhance your care for NF patients.",
        contentLink: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8198724/",
    },
    {
        id:47,
        name: "Recognizing Schwannomatosis and Distinguishing it From Neurofibromatosis Type 1 or 2",
        disease: "Neurofibromatosis",
        audience: Audience.Provider,
        subCategories: [Type.SWN_NF3, Categories.Academic_Journal],
        content:
            "Access cutting-edge information, research updates, and best practices to enhance your care for NF patients.",
        contentLink: "https://journals.lww.com/jspinaldisorders/abstract/2007/06000/recognizing_schwannomatosis_and_distinguishing_it.12.aspx",
    },
    {
        id:48,
        name: "Burden Among Caregivers of Pediatric Patients with Neurofibromatosis Type 1 (NF1) and Plexiform Neurofibroma (PN) in the United States: A Cross-Sectional Study",
        disease: "Neurofibromatosis",
        audience: Audience.Provider,
        subCategories: [Type.NF1, Categories.Article],
        content:
            "Access cutting-edge information, research updates, and best practices to enhance your care for NF patients.",
        contentLink: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9178532/",
    },
    {
        id:49,
        name: "Understanding the Neurofibromatosis Type 1 (NF1) experience and the priorities of individuals with NF1 and their caregivers for cognitive and social-emotional research",
        disease: "Neurofibromatosis",
        audience: Audience.Provider,
        subCategories: [Type.NF1, Categories.Article],
        content:
            "Access cutting-edge information, research updates, and best practices to enhance your care for NF patients.",
        contentLink: "https://www.sciencedirect.com/science/article/abs/pii/S0022395622004113",
    },
    {
        id:50,
        name: "Neurofibromatosis Type 1",
        disease: "Neurofibromatosis",
        audience: Audience.Provider,
        subCategories: [Type.NF1, Categories.Article],
        content:
            "Access cutting-edge information, research updates, and best practices to enhance your care for NF patients.",
        contentLink: "https://www.cancer.net/cancer-types/neurofibromatosis-type-1",
    },
    {
        id:51,
        name: "Identifying Symptoms of Distress in Youth Living with Neurofibromatosis Type 1 (NF1)",
        disease: "Neurofibromatosis",
        audience: Audience.Provider,
        subCategories: [Type.NF1, Categories.PDF],
        content:
            "Access cutting-edge information, research updates, and best practices to enhance your care for NF patients.",
        contentLink: "https://www.patientplanningservices.com/wp-content/uploads/2021/12/Identifying-Symptoms.NF1_.pdf",
    },
    {
        id:52,
        name: "Early Developmental Trajectories in Infants With Neurofibromatosis 1",
        disease: "Neurofibromatosis",
        audience: Audience.Provider,
        subCategories: [Type.NF1, Categories.Article],
        content:
            "Access cutting-edge information, research updates, and best practices to enhance your care for NF patients.",
        contentLink: "https://www.frontiersin.org/articles/10.3389/fpsyg.2022.795951/full",
    },
    {
        id:53,
        name: "Activity of Selumetinib in Neurofibromatosis Type 1–Related Plexiform Neurofibromas",
        disease: "Neurofibromatosis",
        audience: Audience.Provider,
        subCategories: [Type.NF1, Categories.Article],
        content:
            "Access cutting-edge information, research updates, and best practices to enhance your care for NF patients.",
        contentLink: "https://www.nejm.org/doi/full/10.1056/NEJMoa1605943",
    },
    {
        id:54,
        name: "Neurofibromatosis Type 1 Research Explores Patient Experiences With Pain",
        disease: "Neurofibromatosis",
        audience: Audience.Provider,
        subCategories: [Type.NF1, Categories.Academic_Journal],
        content:
            "Access cutting-edge information, research updates, and best practices to enhance your care for NF patients.",
        contentLink: "https://www.ajmc.com/view/neurofibromatosis-type-1-research-explores-patient-experiences-with-pain",
    },
    {
        id:55,
        name: "Parent perspectives on disclosing a pediatric neurofibromatosis type 1 diagnosis",
        disease: "Neurofibromatosis",
        audience: Audience.Provider,
        subCategories: [Type.NF1, Categories.Article],
        content:
            "Access cutting-edge information, research updates, and best practices to enhance your care for NF patients.",
        contentLink: "https://onlinelibrary.wiley.com/doi/full/10.1002/jgc4.1719",
    },
    {
        id:56,
        name: "Neurofibromatosis Type 1 - An Information Leaflet for Health Professionals",
        disease: "Neurofibromatosis",
        audience: Audience.Provider,
        subCategories: [Type.NF1, Categories.PDF],
        content:
            "Access cutting-edge information, research updates, and best practices to enhance your care for NF patients.",
        contentLink: "https://media.gosh.nhs.uk/documents/NF1_leaflet_for_HCPs_-_ER2.pdf",
    },
    {
        id:57,
        name: "Neurofibromatosis Type 1 - Physicians and Professionals Guide to",
        disease: "Neurofibromatosis",
        audience: Audience.Provider,
        subCategories: [Type.NF1, Categories.Article],
        content:
            "Access cutting-edge information, research updates, and best practices to enhance your care for NF patients.",
        contentLink: "https://www.medicalhomeportal.org/diagnoses-and-conditions/neurofibromatosis-type-1",
    },
    {
        id:58,
        name: "Neurofibromatosis Type 1 (NF1) Diagnostic Material",
        disease: "Neurofibromatosis",
        audience: Audience.Provider,
        subCategories: [Type.NF1, Categories.Article],
        content:
            "Access cutting-edge information, research updates, and best practices to enhance your care for NF patients.",
        contentLink: "https://www.newcastle-hospitals.nhs.uk/services/clinical-genetics-service/information-for-healthcare-professionals/care-of-genetic-conditions-in-primary-care/neurofibromatosis-type-1-nf1/",
    },
    {
        id:59,
        name: "Treatment and Medical Management for Neurofibromatosis",
        disease: "Neurofibromatosis",
        audience: Audience.Provider,
        subCategories: [Type.NF1, Categories.Article],
        content:
            "Access cutting-edge information, research updates, and best practices to enhance your care for NF patients.",
        contentLink: "https://www.uab.edu/medicine/nfprogram/learn/neurofibromatosis-type-1-nf1/treatment-management",
    },
    {
        id:60,
        name: "Neurofibromatosis",
        disease: "Neurofibromatosis",
        audience: Audience.Provider,
        subCategories: [Type.All, Categories.Article],
        content:
            "Access cutting-edge information, research updates, and best practices to enhance your care for NF patients.",
        contentLink: "https://www.merckmanuals.com/professional/pediatrics/neurocutaneous-syndromes/neurofibromatosis",
    },
    {
        id:61,
        name: "Neurofibromatosis Type 1",
        disease: "Neurofibromatosis",
        audience: Audience.Provider,
        subCategories: [Type.NF1, Categories.Article],
        content:
            "Access cutting-edge information, research updates, and best practices to enhance your care for NF patients.",
        contentLink: "https://www.lahey.org/lhmc/department/brain-tumor-clinic/common-types-of-tumors/neurofibromatosis-type-1/",
    },
    {
        id:62,
        name: "Clinical and Genetic Characteristics of Patients with Neurofibromatosis Type 1 and Pheochromocytoma",
        disease: "Neurofibromatosis",
        audience: Audience.Provider,
        subCategories: [Type.All, Categories.Article],
        content:
            "Access cutting-edge information, research updates, and best practices to enhance your care for NF patients.",
        contentLink: "https://www.nejm.org/doi/full/10.1056/nejmc066006",
    },
    {
        id:63,
        name: "Clinical Characteristics and Management of Children and Adults with Neurofibromatosis Type 1",
        disease: "Neurofibromatosis",
        focus: "Children",
        audience: Audience.Provider,
        subCategories: [Type.NF1, Categories.Article],
        content:
            "Access cutting-edge information, research updates, and best practices to enhance your care for NF patients.",
        contentLink: "https://link.springer.com/article/10.1007/s40487-022-00213-4",
    },
    {
        id:64,
        name: "Genetic Disorder Reference Sheet: Neurofibromatosis Type 1",
        disease: "Neurofibromatosis",
        audience: Audience.Provider,
        subCategories: [Type.All, Categories.Article],
        content:
            "Access cutting-edge information, research updates, and best practices to enhance your care for NF patients.",
        contentLink: "https://voice.ons.org/news-and-views/genetic-disorder-reference-sheet-neurofibromatosis-type-1",
    },
    {
        id:65,
        name: "Neurofibroma",
        disease: "Neurofibromatosis",
        audience: Audience.Provider,
        subCategories: [Type.NF1, Categories.Article],
        content:
            "Access cutting-edge information, research updates, and best practices to enhance your care for NF patients.",
        contentLink: "https://www.hopkinsmedicine.org/health/conditions-and-diseases/neurofibromas",
    },
    {
        id:66,
        name: "Neurofibromatosis Type 1 - Primary Care Guide",
        disease: "Neurofibromatosis",
        audience: Audience.Provider,
        subCategories: [Type.NF1, Categories.PDF],
        content:
            "Access cutting-edge information, research updates, and best practices to enhance your care for NF patients.",
        contentLink: "https://nfnetwork.org/data/uploads/pdfs/primary-care_for_patients.pdf",
    },
]