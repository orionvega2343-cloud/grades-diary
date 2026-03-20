// TODO: панель общих оценок по всем предметам
import styles from './Dashboard.module.css'
import average from '../../../utils/average'
import MOCKS from '../../../mocks/grades'
import { overalAvg } from '../../../utils/average'

function Grades() {
     // == ОЦЕНКИ СТУДЕНТОВ == //
     const firstStudent = MOCKS[0]
     const secondStudent = MOCKS[1]
     const thirdStudent = MOCKS[2]
     const fourthStudent = MOCKS[3]
     const fifthStudent = MOCKS[4]
     const sixthStudent = MOCKS[5]
     const seventhStudent = MOCKS[6]
     // == ОЦЕНКИ СТУДЕНТОВ == //
 
     // == СРЕДНИЙ БАЛЛ СТУДЕНТОВ == //
     const avgFirstStudent = average(MOCKS[0].grades)
     const avgSecondStudent = average(MOCKS[1].grades)
     const avgThirdStudent = average(MOCKS[2].grades)
     const avgFourthStudent = average(MOCKS[3].grades)
     const avgFifthStudent = average(MOCKS[4].grades)
     const avgSixthStudent = average(MOCKS[5].grades)
    

     const gradesLenFirstStudent = firstStudent.grades.length
     const gradesLenSecondStudent = secondStudent.grades.length
     const gradesLenThirdStudent = thirdStudent.grades.length
     const gradesLenFourthStudent = fourthStudent.grades.length
     const gradesLenFifthStudent = fifthStudent.grades.length
     const gradesLenSixthStudent = sixthStudent.grades.length
     
  return (
    <section className={styles.grades}>
      <div className={styles.gradesContainer}>
        <header className={styles.header}>
          <h2 className={styles.title}>Оценки по предметам</h2>
          
        </header>

        <div className={styles.subjects}>
          {/* Предмет 1 */}
          <article className={styles.subject}>
            <div className={styles.subjectHeader}>
              <div className={styles.subjectInfo}>
                <h3 className={styles.subjectName}>Алгебра</h3>
                <span className={styles.subjectMeta}>2 четверть</span>
              </div>
              <div className={styles.subjectStats}>
                <span className={styles.stat}>
                  <span className={styles.statLabel}>Среднее</span>
                  <span className={styles.statValue}>{avgFirstStudent}</span>
                </span>
                <span className={styles.stat}>
                  <span className={styles.statLabel}>Оценок</span>
                  <span className={styles.statValue}>{gradesLenFirstStudent}</span>
                </span>
              </div>
            </div>

            <ul className={styles.gradesList}>
             {firstStudent.grades.map((item,index) =>
                <li className={styles.gradeItem} key={index}>{item}</li>
            )}
            
            </ul>
          </article>

          {/* Предмет 2 */}
          <article className={styles.subject}>
            <div className={styles.subjectHeader}>
              <div className={styles.subjectInfo}>
                <h3 className={styles.subjectName}>История</h3>
                <span className={styles.subjectMeta}>2 четверть</span>
              </div>
              <div className={styles.subjectStats}>
                <span className={styles.stat}>
                  <span className={styles.statLabel}>Среднее</span>
                  <span className={styles.statValue}>{avgSecondStudent}</span>
                </span>
                <span className={styles.stat}>
                  <span className={styles.statLabel}>Оценок</span>
                  <span className={styles.statValue}>{gradesLenSecondStudent}</span>
                </span>
              </div>
            </div>

            <ul className={styles.gradesList}>
              {secondStudent.grades.map((item,index) => 
                <li className={styles.gradeItem} key={index}>{item}</li>
            )}
            </ul>
          </article>

          {/* Предмет 3 — пример без оценок */}
          <article className={styles.subject}>
            <div className={styles.subjectHeader}>
              <div className={styles.subjectInfo}>
                <h3 className={styles.subjectName}>Английский язык</h3>
                <span className={styles.subjectMeta}>2 четверть</span>
              </div>
              <div className={styles.subjectStats}>
                <span className={styles.stat}>
                  <span className={styles.statLabel}>Среднее</span>
                  <span className={styles.statValue}>{avgThirdStudent}</span>
                </span>
                <span className={styles.stat}>
                  <span className={styles.statLabel}>Оценок</span>
                  <span className={styles.statValue}>{gradesLenThirdStudent}</span>
                </span>
              </div>
            </div>

            <ul className={styles.gradesList}>
                {thirdStudent.grades.map((item,index) => 
                    <li className={styles.gradeItem} key={index}>{item}</li>
                )}
            </ul>
          </article>

          {/* Предмет 4 */}
          <article className={styles.subject}>
            <div className={styles.subjectHeader}>
              <div className={styles.subjectInfo}>
                <h3 className={styles.subjectName}>Русский язык</h3>
                <span className={styles.subjectMeta}>2 четверть</span>
              </div>
              <div className={styles.subjectStats}>
                <span className={styles.stat}>
                  <span className={styles.statLabel}>Среднее</span>
                  <span className={styles.statValue}>{avgFourthStudent}</span>
                </span>
                <span className={styles.stat}>
                  <span className={styles.statLabel}>Оценок</span>
                  <span className={styles.statValue}>{gradesLenFourthStudent}</span>
                </span>
              </div>
            </div>

            <ul className={styles.gradesList}>
                {fourthStudent.grades.map((item,index) => 
                    <li className={styles.gradeItem} key={index}>{item}</li>
                )}
            </ul>
          </article>

          {/* Предмет 5 */}
          <article className={styles.subject}>
            <div className={styles.subjectHeader}>
              <div className={styles.subjectInfo}>
                <h3 className={styles.subjectName}>Литература</h3>
                <span className={styles.subjectMeta}>2 четверть</span>
              </div>
              <div className={styles.subjectStats}>
                <span className={styles.stat}>
                  <span className={styles.statLabel}>Среднее</span>
                  <span className={styles.statValue}>{avgFifthStudent}</span>
                </span>
                <span className={styles.stat}>
                  <span className={styles.statLabel}>Оценок</span>
                  <span className={styles.statValue}>{gradesLenFifthStudent}</span>
                </span>
              </div>
            </div>

            <ul className={styles.gradesList}>
                {fifthStudent.grades.map((item,index) => 
                <li className={styles.gradeItem} key={index}>{item}</li>
               )}
            </ul>
          </article>

          {/* Предмет 6 */}
          <article className={styles.subject}>
            <div className={styles.subjectHeader}>
              <div className={styles.subjectInfo}>
                <h3 className={styles.subjectName}>Биология</h3>
                <span className={styles.subjectMeta}>2 четверть</span>
              </div>
              <div className={styles.subjectStats}>
                <span className={styles.stat}>
                  <span className={styles.statLabel}>Среднее</span>
                  <span className={styles.statValue}>{avgSixthStudent}</span>
                </span>
                <span className={styles.stat}>
                  <span className={styles.statLabel}>Оценок</span>
                  <span className={styles.statValue}>{gradesLenSixthStudent}</span>
                </span>
              </div>
            </div>

            <ul className={styles.gradesList}>
                {sixthStudent.grades.map((item,index) => 
                    <li className={styles.gradeItem} key={index}>{item}</li>
                )}
            </ul>
          </article>

          {/* Предмет 7 */}
          <article className={styles.subject}>
            <div className={styles.subjectHeader}>
              <div className={styles.subjectInfo}>
                <h3 className={styles.subjectName}>Информатика</h3>
                <span className={styles.subjectMeta}>2 четверть</span>
              </div>
              <div className={styles.subjectStats}>
                <span className={styles.stat}>
                  <span className={styles.statLabel}>Среднее</span>
                  <span className={styles.statValue}>—</span>
                </span>
                <span className={styles.stat}>
                  <span className={styles.statLabel}>Оценок</span>
                  <span className={styles.statValue}>0</span>
                </span>
              </div>
            </div>

            <div className={styles.emptyGrades}>Пока нет оценок</div>
          </article>
        </div>
        <div className={styles.overalAvg}>
          <span className={styles.overalAvgLabel}>Средний балл по всем предметам</span>
          <span className={styles.overalAvgValue}>{overalAvg()}</span>
        </div>
      </div>
    </section>
  )
}

export default Grades